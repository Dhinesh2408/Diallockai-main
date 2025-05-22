"use client";

import Head from "next/head";

const blogs = [
  {
    title: "The Future of B2B Sales Is Here — and It's More Exciting Than Ever! 🔥",
    date: "May 22, 2025",
    summary:
      "Explore how Diallockai revolutionizes B2B sales with personalized outreach, time-saving automation, and smarter workflows for sales teams.",
    content: (
      <>
        <p>
          For the past few weeks, our sales team had the incredible opportunity to demo DialLock AI’s B2B Sales Agent to company founders and sales representatives.
        </p>
        <p>
          At first, many thought it was just another "email automation" tool. But as the demo unfolded, something amazing happened: They saw their dream sales workflow come alive.
        </p>

        <h2>The Challenge Today</h2>
        <p>
          B2B salespeople spend endless hours researching prospects, drafting emails, and manually following up. This work is critical — but incredibly time-consuming.
        </p>

        <h2>The Reality</h2>
        <p>
          Yes, there are many platforms out there claiming to solve these problems — but most are packed with overwhelming complexity, and have subscription costs that skyrocket 🚀🏀.
        </p>

        <h2>What Makes Diallockai Different?</h2>
        <ul className="list-disc list-inside mb-6">
          <li>❌ We don't replace humans — we make them more productive.</li>
          <li>❌ No bulk spamming.</li>
          <li>❌ No templated or robotic emails.</li>
          <li>❌ No complex software that drains your time and budget.</li>
          <li>✅ We craft personalized emails that make your prospects feel seen and valued.</li>
          <li>✅ We save you hours — imagine sending 30-40 customized emails in just 30 minutes a day!</li>
          <li>✅ We handle the research work, so you can focus on closing deals.</li>
          <li>✅ We ensure timely and meaningful follow-ups.</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We’re just getting started. Our engineering team is working passionately to build a future where B2B sales is smarter, faster, and more human-centered. 💯
        </p>

        <p>
          If you’re ready to experience the future of sales, visit <a href="https://www.diallockai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.diallockai.com</a> and book a demo now.
        </p>

        <p>
          Follow our page for upcoming updates — because the future of sales is about to get even better.
        </p>

        <p className="italic text-gray-600 mt-6">
          #AIagent #AISales #AISelling #EmailMarketing #Startup #SaaS #SalesInnovation
        </p>
      </>
    ),
  },
  {
    title: "🚨 Stop Drowning Your Sales Team in Repetitive Tasks — AI Is Here to Help!",
    date: "May 23, 2025",
    summary:
      "Discover how DialLock AI’s plug-and-play sales automation frees your team to focus on closing deals and drives enterprise-grade results.",
    content: (
      <>
        <p>
          Welcome to 2025, where smart B2B companies are cutting 50% of their sales operational workload using AI agents — and finally focusing on what only humans can do.
        </p>

        <h2>The Reality Today</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Most "sales automation" tools aren’t truly automated.</li>
          <li>Companies claim to provide “Personalized” emails but they still sound like templates.</li>
          <li>Your team juggles tools instead of closing deals.</li>
        </ul>

        <h2>Introducing DialLock AI — Enterprise-Grade AI Sales Automation</h2>
        <p>
          Built for humans, not to replace them. DialLock AI is designed based on the feedback from hundreds of B2B salespeople about their pain points and expected outcomes.
        </p>

        <h2>What’s Inside (So Far)</h2>
        <ul className="list-disc list-inside mb-6">
          <li>✔️ Researches your target companies & decision-makers.</li>
          <li>✔️ Writes truly personalized emails (no templates here).</li>
          <li>✔️ Sends timely, smart follow-ups — automatically.</li>
        </ul>

        <p>Just upload your leads and let DialLock AI take over.</p>

        <p>
          This is a plug-and-play AI model designed for B2B sales teams and agencies ready to scale. 🎉 The MVP is out now and rolling out to B2B companies worldwide.
        </p>

        <p>
          Be a part of our early customer program with special lifetime rates. Just comment <strong>Diallock AI</strong> to join.
        </p>

        <p>
          👉 Try it now. See the impact. Close more deals. Free up your team’s time for what matters. Don’t miss the chance to transform your sales process.
        </p>

        <p className="italic text-gray-600 mt-6">
          #DiallockAI #SalesAutomation #B2BSales #LeadGen #AIAutomation #SalesEnablement #AIForSales #TechForGrowth #SalesTech #StartupLaunch #B2BMarketing #MVPLaunch #SaaS #FutureOfSales
        </p>
      </>
    ),
  },
  {
    title: "5 Strategies to Improve B2B Outreach in 2025",
    date: "May 20, 2025",
    summary: "Discover the most effective ways to engage clients and maximize your outbound sales using AI and automation.",
  },
  {
    title: "How Personalization is Changing the Sales Game",
    date: "May 12, 2025",
    summary: "Learn how personalization is increasing conversion rates and making client outreach more human than ever.",
  },
  {
    title: "Top Tools Every Sales Team Needs This Year",
    date: "May 5, 2025",
    summary: "From CRMs to AI tools like DialLock AI, explore what you must have in your sales stack this year.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>DialLock AI Blog - B2B Sales Automation & AI Sales Tips</title>
        <meta
          name="description"
          content="Read the latest insights on B2B sales automation, AI sales agents, personalized outreach, and how DialLock AI is transforming sales workflows."
        />
        <meta name="keywords" content="B2B sales, AI sales automation, DialLock AI, sales outreach, personalized emails, lead generation, sales technology" />
        <meta name="author" content="DialLock AI Team" />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-30">
        <h1 className="text-5xl font-bold text-center mb-16 text-blue-600 font-playfair">
          Diallockai Blog
        </h1>

        <section className="space-y-20">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12"
              aria-labelledby={`blog-title-${idx}`}
              tabIndex={0}
              role="article"
            >
              <header>
                <h2
                  id={`blog-title-${idx}`}
                  className="text-3xl font-extrabold mb-2 font-playfair text-gray-900"
                >
                  {blog.title}
                </h2>
                <time
                  dateTime={new Date(blog.date).toISOString()}
                  className="block text-sm text-gray-500 mb-6"
                >
                  {blog.date}
                </time>
                <p className="text-lg font-medium text-gray-700 mb-8">{blog.summary}</p>
              </header>

              <section className="prose prose-indigo max-w-none text-gray-800">
                {blog.content ? (
                  blog.content
                ) : (
                  <p>{blog.summary}</p>
                )}
              </section>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
