import SYSTEM_CONTEXT from "@/data/context";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set');
    return res.status(500).json({ error: 'Gemini API not configured' });
  }

  try {
    const fullPrompt = `${SYSTEM_CONTEXT}\nUser: ${message}\nAI:`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
        }),
      }
    );

    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error('Non-JSON response:', text);
      return res.status(500).json({ error: 'Non-JSON response from Gemini API', details: text });
    }

    console.log('Gemini API raw response:', JSON.stringify(data, null, 2));

    let reply = 'No response received';
    if (data.candidates && data.candidates.length > 0) {
      reply = data.candidates[0]?.content?.parts?.[0]?.text || reply;
    } else if (data.error) {
      reply = `Error: ${data.error.message || JSON.stringify(data.error)}`;
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Gemini error:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate response' });
  }
}