export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!process.env.HUGGING_FACE_API_KEY) {
    console.error('HUGGING_FACE_API_KEY is not set');
    return res.status(500).json({ error: 'Hugging Face API not configured' });
  }

  try {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1',
      {
        headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` },
        method: 'POST',
        body: JSON.stringify({ inputs: message }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to get response from Hugging Face');
    }

    const result = await response.json();
    const reply = result[0]?.generated_text || 'No response received';

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Hugging Face error:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate response' });
  }
}