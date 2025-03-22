import { useState } from "react";
import Tag from "./Tag";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqData = [
    {
        question: "What is your return policy?",
        answer: "Our return policy allows returns within 30 days of purchase with a receipt. Please ensure that the items are in their original condition and packaging."
    },
    {
        question: "How can I track my order?",
        answer: "You can track your order using the tracking number provided in your confirmation email. Visit our website and enter the tracking number in the 'Track Order' section."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to select countries. Please check our shipping policy for more details, including estimated delivery times and costs."
    },
    {
        question: "How can I contact customer service?",
        answer: "You can contact our customer service via email at support@example.com or call us at 123-456-7890. Our support team is available Monday to Friday, 9 AM to 5 PM."
    }
];


const Faq = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section>
            <div className="container" >
                <div className="text-center" >
                    <Tag>
                        faqs
                    </Tag>
                </div>

                <div className="mt-10 text-6xl text-center max-w-xl mx-auto" >
                    <span>Questions? We have got</span> {" "}
                    <span className="text-lime-500" >Answers</span>
                </div>

                <div className="p-3 flex flex-col gap-3 max-w-xl mx-auto mt-12" >
                    {faqData.map((item, index) => (
                        <div key={index} onClick={() => toggleFaq(index)} className="cursor-pointer bg-neutral-900 border border-white/30 rounded-lg p-3">
                            <h3 className="flex justify-between text-white/80 text-xl font-medium" >
                                {item.question}
                                <PlusIcon isOpen={openIndex === index} />
                            </h3>
                            <AnimatePresence>
                                {openIndex === index &&
                                    <motion.div initial={{
                                        height: 0,
                                        marginTop: 0,
                                    }} animate={{
                                        height: "auto",
                                        marginTop: 12,
                                    }} exit={{
                                        height: 0,
                                        marginTop: 0,
                                    }}
                                     className={twMerge("overflow-hidden")}
                                    >
                                        <p className="text-lg font-medium text-white/50 mt-2" >
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => {

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(`transition-transform duration-500 text-lime-400 ${isOpen ? 'rotate-45' : ''}`)}
        >
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};

export default Faq