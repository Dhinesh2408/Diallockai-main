import { Gift, Users, Info } from "lucide-react";

export const metadata = {
  title: "Referral Program - Diallockai",
  description:
    "Join Diallockai's Referral Program today and earn gift cards, gadgets, and exclusive bonuses for every successful referral!",
};

export default function ReferralProgram() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-4 text-purple-600 tracking-tight">
          🎁 Referral Program
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Invite your friends to Diallockai and earn exciting rewards like gift cards, gadgets, and more!
          Start sharing your unique link and watch your rewards grow.
        </p>
      </header>

      {/* Rewards Section */}
      <section
        aria-label="Referral Program Rewards"
        className="grid md:grid-cols-3 gap-8 mb-14"
      >
        <article className="bg-yellow-50 border border-yellow-300 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-5">
            <Gift className="text-yellow-600" size={28} />
            <h2 className="text-xl font-semibold text-yellow-700">Your Rewards</h2>
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Gift Cards</strong> – Earn for each successful signup.
            </li>
            <li>
              <strong>Gadget Bonuses</strong> – Exclusive devices for top referrers.
            </li>
            <li>
              <strong>Recognition</strong> – Leaderboard shoutouts & community fame.
            </li>
          </ul>
        </article>

        <article className="bg-blue-50 border border-blue-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-5">
            <Users className="text-blue-600" size={28} />
            <h2 className="text-xl font-semibold text-blue-700">Friends Benefit</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            They get <strong>2 months free</strong> on any paid plan after their 14-day trial ends — a perfect incentive to join.
          </p>
        </article>

        <article className="bg-green-50 border border-green-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-5">
            <Info className="text-green-600" size={28} />
            <h2 className="text-xl font-semibold text-green-700">How It Works</h2>
          </div>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Join:</strong> Sign up to start referring your network.
            </li>
            <li>
              <strong>Share:</strong> Distribute your unique referral link easily.
            </li>
            <li>
              <strong>Earn:</strong> Receive rewards on every successful referral.
            </li>
          </ol>
        </article>
      </section>

      {/* CTA */}
      <div className="text-center mb-20">
        <button
          type="button"
          className="bg-purple-600 text-white py-4 px-12 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors shadow-md"
          aria-label="Refer Now and Earn Rewards"
        >
          🚀 Refer Now
        </button>
      </div>

      {/* FAQ Section */}
      <section
        aria-labelledby="faq-heading"
        className="border-t pt-12"
      >
        <h2
          id="faq-heading"
          className="text-3xl font-semibold text-gray-800 mb-10 text-center"
        >
          ❓ Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-700">
          {[
            {
              question: "What is the DialLock AI Referral Program?",
              answer: "Invite others and earn rewards for every successful referral.",
            },
            {
              question: "How do I participate?",
              answer: "Simply sign up and share your unique referral link.",
            },
            {
              question: "What rewards can I earn?",
              answer:
                "Earn gift cards, gadget bonuses, and premium access depending on your referrals.",
            },
            {
              question: "How do I know if my referral is successful?",
              answer:
                "We’ll notify you by email once someone signs up and activates a plan.",
            },
            {
              question: "How will I receive my rewards?",
              answer:
                "Rewards are emailed to your registered account within 7 days after confirmation.",
            },
            {
              question: "Is there a referral limit?",
              answer: "Nope! Refer as many friends as you'd like.",
            },
            {
              question: "Do I need to be a paying customer?",
              answer:
                "No, anyone can join and refer — even users on the free plan.",
            },
            {
              question: "Can I refer for other DialLock AI products?",
              answer:
                "Currently, the program applies only to subscriptions on our main pricing page.",
            },
            {
              question: "Need more help?",
              answer: (
                <>
                  Contact us at{" "}
                  <a
                    href="mailto:info@Diallockai.com"
                    className="text-purple-600 underline hover:text-purple-700"
                  >
                    info@Diallockai.com
                  </a>
                  .
                </>
              ),
            },
          ].map(({ question, answer }, i) => (
            <article
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-3 text-gray-900">{question}</h3>
              <p className="leading-relaxed">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <div className="text-center mt-20">
        <button
          type="button"
          className="bg-purple-600 text-white py-4 px-12 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors shadow-md"
          aria-label="Join the DialLock AI Referral Program"
        >
          🎯 Join the Referral Program
        </button>
      </div>
    </main>
  );
}
