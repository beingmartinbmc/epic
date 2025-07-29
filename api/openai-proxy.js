import { storeConversation } from './mongodb.js';

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'https://beingmartinbmc.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Access-Control-Allow-Origin', 'https://beingmartinbmc.github.io');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract user input from the request - get the actual user message
    const messages = req.body.messages;
    const userMessage = messages.find(msg => msg.role === 'user')?.content || 'No user message found';
    
    // Extract selected text option from the user message
    let selectedText = 'ALL'; // default
    if (userMessage.includes('from EACH of the following:')) {
      // This indicates "All Sacred Texts" was selected
      selectedText = 'ALL';
    } else if (userMessage.includes('Bhagavad Gita')) {
      selectedText = 'BHAGAVAD_GITA';
    } else if (userMessage.includes('Vedas')) {
      selectedText = 'VEDAS';
    } else if (userMessage.includes('Quran')) {
      selectedText = 'QURAN';
    } else if (userMessage.includes('Bible')) {
      selectedText = 'BIBLE';
    } else if (userMessage.includes('Guru Granth Sahib')) {
      selectedText = 'GURU_GRANTH_SAHIB';
    }
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL,
        messages: req.body.messages,
        temperature: parseFloat(process.env.OPENAI_TEMPERATURE),
        max_tokens: parseInt(process.env.OPENAI_TOKEN)
      })
    });

    const data = await response.json();
    
    // Store conversation in MongoDB if the API call was successful
    if (data.choices && data.choices.length > 0) {
      try {
        const modelOutput = data.choices[0].message;
        const metadata = {
          selectedText: selectedText,
          model: process.env.OPENAI_MODEL,
          temperature: parseFloat(process.env.OPENAI_TEMPERATURE),
          maxTokens: parseInt(process.env.OPENAI_TOKEN),
          usage: data.usage || {},
          requestId: data.id
        };
        
        await storeConversation(userMessage, modelOutput, metadata);
      } catch (mongoError) {
        console.error('Failed to store conversation in MongoDB:', mongoError);
        // Don't fail the request if MongoDB storage fails
      }
    }
    
    res.setHeader('Access-Control-Allow-Origin', 'https://beingmartinbmc.github.io');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(200).json(data);
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.setHeader('Access-Control-Allow-Origin', 'https://beingmartinbmc.github.io');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(500).json({ error: 'Failed to fetch from OpenAI' });
  }
} 