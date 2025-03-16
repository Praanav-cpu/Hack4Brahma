import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const faqRef = useRef(null);
  const [openIndex, setOpenIndex] = React.useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, faqRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "What is the registration process?",
      answer: "Register through our website by filling out the application form. Teams of 2-4 members are required. Each member must have a valid ID proof."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free. All facilities and resources will be provided at no cost."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and any personal items you need. We'll provide power, internet, and refreshments."
    },
    {
      question: "Are there any prerequisites?",
      answer: "Basic programming knowledge is required. Familiarity with web development, cybersecurity, or AI is a plus."
    },
    {
      question: "Will there be mentors?",
      answer: "Yes, experienced mentors from defense and tech industries will be available throughout the event."
    },
    {
      question: "What about accommodation?",
      answer: "We provide on-site accommodation for participants from other cities. Please mention your requirement during registration."
    }
  ];

  return (
    <div ref={faqRef} className="faq-section bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="faq-item mb-4 bg-gray-900 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-military-green" />
                ) : (
                  <Plus className="w-5 h-5 text-military-green" />
                )}
              </button>
              <div 
                className={`px-6 py-4 text-gray-300 transition-all duration-200 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;