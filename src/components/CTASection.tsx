import React from 'react';

interface CTASectionProps {
  buttonText: string;
  description: string;
  link: string;
  note?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  buttonText,
  description,
  link,
  note,
}) => {
  return (
    <section className="py-16 bg-green-700 text-white text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8">{description}</h3>
        <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
          <a href={link}>{buttonText}</a>
        </button>
        {note && <p className="mt-4 text-sm">{note}</p>}
      </div>
    </section>
  );
};

export default CTASection;
