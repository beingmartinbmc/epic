const API_URL = process.env.OPENAI_PROXY_URL;

if (!API_URL) {
  console.error('❌ OPENAI_PROXY_URL is not set.');
  process.exit(1);
}
