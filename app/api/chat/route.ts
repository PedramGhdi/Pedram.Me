import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import data from "@/data";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Create a context string from your data
const createContextFromData = () => {
  const projects = data.projects.projects
    .map((p) => `- ${p.title}: ${p.description}`)
    .join("\n");

  const skills = data.technologies.skills.map((s) => s.name).join(", ");

  return `
    About Pedram Ghaderi:
    - Over 5 years of experience in JavaScript, TypeScript, React, Vue, Node.js, PHP, and MongoDB.
    - Expertise in building high-performance, scalable web & mobile applications.
    - Led projects in Next.js, React Native, Vue.js, Laravel, and Express.js.
    - Experienced in API development, backend architecture, and cloud integration.
    - Strong problem-solving mindset, passionate about AI integration & automation.
    - Email: ${data.contact.email}
    
    Core Expertise:
      - Next.js, React.js, Vue.js, React Native, Redux, TypeScript
      - UI/UX design & responsive development
      - Performance optimization & cross-browser compatibility
      - Full Stack Development: ${skills}

    Notable AI Projects:
      ${projects}
    
    AI Integration Process:
      1. Requirements Analysis – Understanding your AI needs
      2. Solution Design – Choosing the right AI models & integration methods
      3. Implementation – Seamless deployment with existing systems
      4. Testing & Optimization – Ensuring accuracy & performance
      5. Monitoring & Maintenance – Continuous improvements & updates
    
    Services:
      - Custom AI Feature Development
      - AI Model Integration & Optimization
      - Web & Mobile App Development
      - API & Database Architecture
      - Performance & Scalability Consulting
  `;
};

const MESSAGE_HISTORY_LIMIT = 5;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: `You are an AI assistant for Pedram Ghaderi. Use the following information to help answer questions:
            ${createContextFromData()}
            
            Guidelines:
            - Be enthusiastic and professional
            - Provide specific, detailed examples from the context
            - Highlight relevant projects and technical capabilities
            - Be confident about AI integration abilities
            - Emphasize practical, real-world applications
            - Keep responses well-structured with clear sections
            - Use bullet points or numbered lists for better readability
            - Always mention relevant experience and past projects
            - For specific project inquiries, guide users to the contact form
            - Focus on Pedram's expertise in Next.js, React, and advanced AI integration`,
        },
        {
          role: "model",
          parts:
            "I understand. I'll act as Pedram's AI assistant, providing detailed, confident responses about her extensive experience in AI integration, Next.js development, and full-stack capabilities. I'll emphasize her practical approach and successful project implementations while maintaining professionalism and enthusiasm.",
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: any) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: msg.content,
        })),
      ],
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content
    );
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
