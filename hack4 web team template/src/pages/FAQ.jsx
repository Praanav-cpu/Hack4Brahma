import FaqItem from "../components/faq-item";

const faqs = [
  { question: "What is Hack4Brahma?", answer: "A Special Forces-themed hackathon focusing on innovation in defense technology." },
  { question: "Who can participate?", answer: "Open to students, professionals, and tech enthusiasts interested in defense tech." },
  { question: "Do I need a team?", answer: "Teams of 2-4 are recommended, but solo participants are welcome." },
  { question: "Is there a registration fee?", answer: "No, participation is completely free, but pre-registration is required." },
];

function FAQ() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-10">
          Review the most commonly asked questions about the event.
        </p>
        <div className="max-w-3xl mx-auto grid gap-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;