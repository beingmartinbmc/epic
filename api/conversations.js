import { getAllConversations } from './mongodb.js';

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'https://beingmartinbmc.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Access-Control-Allow-Origin', 'https://beingmartinbmc.github.io');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Conversations API called');
    const limit = parseInt(req.query.limit) || 100;
    const conversations = await getAllConversations(limit);
    
    res.setHeader('Access-Control-Allow-Origin', 'https://beingmartinbmc.github.io');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(200).json({
      success: true,
      count: conversations.length,
      conversations
    });
  } catch (error) {
    console.error('Error in conversations API:', error);
    res.setHeader('Access-Control-Allow-Origin', 'https://beingmartinbmc.github.io');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(500).json({ 
      error: 'Failed to fetch conversations',
      details: error.message 
    });
  }
} 