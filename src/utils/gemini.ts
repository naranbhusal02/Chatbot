import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API with your API key
const API_KEY = 'AIzaSyC_AFbM-iqZUC09WC-CvNx4bJgv66aQJ-E';
const genAI = new GoogleGenerativeAI(API_KEY);

// Create a chat model instance
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

// Initialize chat history
let chatSession: any = null;

export const initChat = async () => {
  try {
    chatSession = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
      },
    });
    return true;
  } catch (error) {
    console.error('Error initializing chat:', error);
    return false;
  }
};

export const sendMessage = async (message: string) => {
  try {
    if (!chatSession) {
      await initChat();
    }
    
    const result = await chatSession.sendMessage(message);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to get response from Gemini');
  }
};