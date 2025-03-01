import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });

// Text summarization function
async function summarizeTextWithGemini(text) {
  try {
    const prompt = `Please provide a concise summary of the following text:\n\n${text}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in summarization:', error);
    throw new Error('Failed to summarize text');
  }
}

// Text rewriting function
async function rewriteTextWithGemini(text, style = 'improve writing') {
  try {
    const prompt = `Please rewrite the following text with this style: ${style}\n\nText: ${text}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in rewriting:', error);
    throw new Error('Failed to rewrite text');
  }
}

// Summarize endpoint
app.post('/summarize', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const summarizedText = await summarizeTextWithGemini(text);
    res.json({ summarizedText });
  } catch (error) {
    console.error('Error in /summarize endpoint:', error);
    res.status(500).json({ error: error.message });
  }
});

// Rewrite endpoint
app.post('/rewrite', async (req, res) => {
  try {
    const { text, style } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const rewrittenText = await rewriteTextWithGemini(text, style);
    res.json({ rewrittenText });
  } catch (error) {
    console.error('Error in /rewrite endpoint:', error);
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});