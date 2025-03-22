import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI with configuration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite",
  generationConfig: {
    maxOutputTokens: 1000,
    temperature: 0.1,
  },
});

// Text summarization function
async function summarizeTextWithGemini(text) {
  try {
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `Please provide a very concise summary of the following text in 1-2 sentences maximum. Keep it brief and to the point:\n\n${text}`,
          },
        ],
      },
    ];
    const result = await model.generateContent({ contents });
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in summarization:", error);
    throw new Error("Failed to summarize text");
  }
}

// Text rewriting function
async function rewriteTextWithGemini(text, style = "improve writing") {
  try {
    let prompt;

    switch (style) {
      case "funny":
        prompt = `Write a short, funny text message reply to the following message. Keep it brief (max 1-2 sentences), casual, and with a humorous tone like you're texting a friend:\n\nMessage: ${text}`;
        break;
      case "flirty":
        prompt = `Write a short, flirty text message reply to the following message. Keep it brief (max 1-2 sentences), playful, and with a light flirtatious tone like you're texting someone you're interested in:\n\nMessage: ${text}`;
        break;
      case "analytical":
        prompt = `Analyze the following text message briefly. Identify patterns, tone, and key points. Keep your analysis concise (2-3 sentences maximum):\n\nMessage: ${text}`;
        break;
      default:
        prompt = `Please rewrite the following text with this style: ${style}\n\nText: ${text}`;
    }

    const contents = [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ];
    const result = await model.generateContent({ contents });
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in rewriting:", error);
    throw new Error("Failed to rewrite text");
  }
}

// Summarize endpoint
app.post("/summarize", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const summarizedText = await summarizeTextWithGemini(text);
    res.json({ summarizedText });
  } catch (error) {
    console.error("Error in /summarize endpoint:", error);
    res.status(500).json({ error: error.message });
  }
});

// Rewrite endpoint
app.post("/rewrite", async (req, res) => {
  try {
    const { text, style } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const rewrittenText = await rewriteTextWithGemini(text, style);
    res.json({ rewrittenText });
  } catch (error) {
    console.error("Error in /rewrite endpoint:", error);
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
