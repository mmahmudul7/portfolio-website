import {useState} from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y4yqriv",
        "template_xao91cf",
        e.target,
        "mTjtzWSnGOlByy7uU"
      )
      .then(
        () => {
          setStatus("SUCCESS");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("FAILED");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contact
        </h2>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="bg-yellow-50 p-8 rounded-xl border border-amber-500 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-yellow-600 text-white text-lg font-medium rounded-lg hover:bg-yellow-700 transition"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status === "SUCCESS" && (
            <p className="mt-4 text-green-600 font-medium text-center">
              Message sent successfully!
            </p>
          )}
          {status === "FAILED" && (
            <p className="mt-4 text-red-600 font-medium text-center">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
