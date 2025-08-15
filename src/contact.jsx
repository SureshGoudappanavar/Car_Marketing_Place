import React, { useState } from "react";
import Header from "./components/Header";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_x5ohnt9", // Replace with your EmailJS service ID
      "template_lrnjlf7", // Replace with your EmailJS template ID
      formData,
      "PMDP-hlkavBLUG58b" // Replace with your EmailJS public key
    )
    .then(() => {
      setStatus("✅ Query submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Email send error:", error);
      setStatus("❌ Failed to send query. Please try again.");
    });
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-6">
      <Header/>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Contact <span className="text-indigo-500">Us</span>
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Have any questions or feedback? We’d love to hear from you.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition duration-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition duration-300"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="4"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition duration-300"
              required
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && <p className="text-center mt-4 text-lg font-medium">{status}</p>}

      </div>
    </section>
  );
}

export default Contact;
