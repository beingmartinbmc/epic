export default async function handler(req, res) {
  // Dynamic CORS origin check for GitHub Pages
  const allowedOrigin = 'https://beingmartinbmc.github.io';
  const origin = req.headers.origin;
  
  // Allow if origin matches our GitHub Pages domain (including any subdomain/path)
  const isAllowedOrigin = origin && origin.startsWith(allowedOrigin);
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', isAllowedOrigin ? origin : allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Access-Control-Allow-Origin', isAllowedOrigin ? origin : allowedOrigin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(405).json({ error: 'Method not allowed' });
  }

// ... existing code ... 