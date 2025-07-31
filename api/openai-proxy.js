export default async function handler(req, res) {
  // Restrictive CORS - only allow specific GitHub Pages domain
  const allowedOrigins = [
    'https://beingmartinbmc.github.io',
    'https://beingmartinbmc.github.io/epic',
    'https://beingmartinbmc.github.io/epic/'
  ];
  const origin = req.headers.origin || '';
  const isAllowedOrigin = allowedOrigins.includes(origin);
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', isAllowedOrigin ? origin : '');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Access-Control-Allow-Origin', isAllowedOrigin ? origin : '');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(405).json({ error: 'Method not allowed' });
  }

// ... existing code ... 