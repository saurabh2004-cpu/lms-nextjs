import React from 'react';

const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {/* About Label */}
          <h6 className="poppins font-extrabold mb-2 text-base  md:text-[40px] md:font-[700] text[#383086] poppins text-[#383086]">
            About
          </h6>

          {/* Main Title */}
          <h2 className="poppins font-extrabold md:text-[40px] md:font-[700] text-black mb-4 text-4xl md:text-5xl lg:text-5xl leading-tight">
            Ruchira Darda
          </h2>

          {/* Subtitle with background */}
          <div className="mb-6 py-2 px-4 pr-20 rounded bg-[#ffa500]/10 rounded-md md:text-[16px] md:font-medium md:mr-20 text-black text-sm md:text-base font-normal leading-relaxed poppins">
            Entrepreneur, Parent Educator, Relationship Mentor, Mindfulness Coach, Author
          </div>

          {/* Bio Paragraphs */}
          <div className="mb-6 space-y-2">
            <p className="text-black font-normal text-sm md:text-[16px] md:font-medium poppins">
              Hi, I'm Your Mindful Mentor —Ruchira Darda.
            </p>
            <p className="indent-2 text-black font-normal text-sm md:text-base poppins">
              A TEDx Speaker, Certified Parent & Relationship Coach, and Family Counsellor with 16+ years of experience.
            </p>
          </div>

          <p className="text-black font-normal text-sm md:text-base mb-4 poppins">
            I've coached over 1000 individuals and inspired 10,000+ lives through workshops.
          </p>

          <div className="space-y-2">
            <p className="text-black font-normal text-sm md:text-base poppins">
              With a unique blend of emotional intelligence, mindfulness, and real-life tools, I help families raise stronger children, build healthier relationships, and lead with empathy.
            </p>
            <p className="text-black font-normal text-sm md:text-base poppins">
              I'm on a mission to create emotionally intelligent homes — one mindful step at a time. 💛
            </p>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Golden Circle Background */}
            <div className="absolute top-0 right-0 w-72 h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 rounded-full bg-[#f1cf87] z-0"></div>

            {/* Profile Image */}
            <div className="relative z-10 flex justify-end">
              <img
                src="/images/image-removebg-preview-4.png"
                alt="Ruchira - Mindfulness Coach"
                className="w-80 h-auto md:w-96 lg:w-80 object-contain relative  left-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
