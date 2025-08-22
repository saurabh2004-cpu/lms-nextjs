import React from 'react';

// --- Dummy data for the 3 cards ---
const services = [
  {
    id: 1,
    title: 'Understanding Yourself',
    subtitle: 'By Understanding Others',
    audience: 'Exclusively For Teenagers',
    price: 299,
    image: '/images/ruchira-img-removebg-preview.png',
  },
  {
    id: 2,
    title: 'Understanding Yourself',
    subtitle: 'By Understanding Others',
    audience: 'Exclusively For Teenagers',
    price: 299,
    image: '/images/ruchira-img-removebg-preview.png',
  },
  {
    id: 3,
    title: 'Understanding Yourself',
    subtitle: 'By Understanding Others',
    audience: 'Exclusively For Teenagers',
    price: 299,
    image: '/images/ruchira-img-removebg-preview.png',
  },
];

const ParentingSection = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="text-black md:text[32px] font-bold poppins">Parenting With </span>
          <span className="text-[#383086] md:text[32px] font-bold poppins">Purpose</span>
        </h2>

        <p
          className="text-center text-black text-sm md:text-base font-semibold max-w-5xl mx-auto mb-12 poppins "
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          With over 14 years of experience in being a Certified Parenting & Family Coach, Mindfulness Practitioner,
          Motivational Speaker, and a columnist with over 250 published columns.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col">
              {/* Card */}
              <div className="relative bg-white rounded-t-3xl overflow-hidden md:min-h-[276px] md:min-w-[403px]" >
                {/* Background Card with Text */}
                <div
                  className=" bg-[#D6B56D] relative max-w-2/3 md:top-12 md:left-15  h-44 rounded-2xl flex flex-col justify-center px-8 z-10"
                >
                  <div className="text-black font-bold text-sm leading-tight poppins w-full relative left-12  ">
                    <div >Understanding Yourself</div>
                    <div>By Understanding Others</div>
                    <div>Exclusively For Teenagers</div>
                  </div>
                </div>

                {/* Person Image */}
                <img
                  src={service.image}
                  alt="Understanding Yourself"
                  className="absolute bottom-0 left-0 w-auto h-40 z-20 object-contain"
                />
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentingSection;