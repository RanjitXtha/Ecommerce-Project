import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white py-6 mt-4 margin">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold  mb-4">Get in Touch</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We'd love to hear from you! Whether you have a question about our products, need assistance, or just want
            to share your thoughts, feel free to reach out to us.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Our team is here to help and ensure you have the best experience possible with our brand.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Phone:</strong> +977 9123456789
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-2">
            <strong>Address:</strong> Baneshwor-5, Kathmandu
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-2">
            <strong>Email:</strong> luxury.ecommercesite.np@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h3>
        <form className="max-w-2xl mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact