// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }

//   try {
//     // Send email to yourself
//     await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: 'christiangomelan@gmail.com', // Change this to your email
//       replyTo: email,
//       subject: `New message from ${name}`,
//       html: `
//         <div>
//           <h2>You have a new message from your portfolio!</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message.replace(/\n/g, '<br>')}</p>
//         </div>
//       `,
//     });

//     // Send confirmation email to visitor
//     await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: email,
//       subject: 'Thank you for contacting me!',
//       html: `
//         <div>
//           <h2>Thank you, ${name}!</h2>
//           <p>I received your message and will get back to you soon.</p>
//           <p><strong>Your message:</strong></p>
//           <p>${message.replace(/\n/g, '<br>')}</p>
//         </div>
//       `,
//     });

//     return res.status(200).json({ success: true, message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Resend error:', error);
//     return res.status(500).json({ error: error.message || 'Failed to send email' });
//   }
// }

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Send email to yourself
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'christiangomelan@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div>
          <h2>You have a new message from your portfolio!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    if (response.error) {
      return res.status(400).json({ error: response.error.message });
    }

    // Send confirmation email to visitor
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div>
          <h2>Thank you, ${name}!</h2>
          <p>I received your message and will get back to you soon.</p>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}