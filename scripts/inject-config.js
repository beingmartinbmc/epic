const API_URL = process.env.OPENAI_PROXY_URL || process.argv[2];

if (!API_URL) {
  console.error('OPENAI_PROXY_URL is not provided via env or argument');
  process.exit(1);
}
