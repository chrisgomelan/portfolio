function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg mb-4">Get in touch with me!</p>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 mb-4 border rounded" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact