export const metadata = {
  title: "Partner Program - Diallockai",
  description: "Join the DialLock AI Partner Program and scale your business with advanced AI sales tools, exclusive benefits, and priority support.",
};

export default function PartnerProgram() {
  return (
    <main className="font-sans">
      {/* Hero / Top Section */}
      <section className="relative bg-blue-700 text-white pb-20 pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            🤝 Partner with <span className="text-yellow-300">Diallockai</span>
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Join our Partner Program and grow your business with powerful AI sales tools, exclusive support, and revenue opportunities.
          </p>
          <p className="text-base">
            📧 Reach us at{" "}
            <a
              href="mailto:info@diallockai.com"
              className="underline text-yellow-200 hover:text-white transition"
            >
              info@diallockai.com
            </a>
          </p>
        </div>

        {/* SVG Wavy Divider */}
        <svg
          className="absolute bottom-0 w-full h-20 text-white"
          viewBox="0 0 1440 320"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,160L60,170.7C120,181,240,203,360,213.3C480,224,600,224,720,197.3C840,171,960,117,1080,90.7C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </section>

      {/* Form Section */}
      <section className="bg-white px-6 pt-16 pb-24 -mt-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">📩 Become a Partner</h2>

          <form className="space-y-6 bg-white p-8 shadow-xl rounded-xl border border-gray-200">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-800 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="company" className="block font-medium text-gray-800 mb-1">
                Company / Website
              </label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="www.yourcompany.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-800 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Let us know how you'd like to collaborate..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
               Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
