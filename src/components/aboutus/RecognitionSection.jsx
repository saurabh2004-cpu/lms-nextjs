import React from 'react';

const LaurelWreath = ({ title, img }) => (
  <div className="relative flex items-center justify-center mx-auto mb-3 md:mb-5 mt-6 md:mt-10">
    <div>
      <img 
        src={img}
        alt={title}
        className="w-[120px] sm:w-[150px] md:w-[218px] h-auto md:h-[160px]"
      />
    </div>
  </div>
);

const RecognitionsSection = () => {
  const recognitions = [
    {
      title: "CERTIFIED",
      description:
        "B.Com LLB, NLP Practitioner, ACC Certified Coach, Certified Sex Educator, Certified Personal Counsellor",
      img: "/images/image-260.png",
    },
    {
      title: "AUTHOR",
      description: "Author of 8 children's books and a columnist in Lokmat Times.",
      img: "/images/image-261.png",
    },
    {
      title: "DIRECTOR",
      description: "Lokmat MahaMarathon Lokmat Campus Club Wider Opportunities for Women",
      img: "/images/image-262.png",
    },
  ];

  return (
    <div 
      className="w-full mx-auto px-3 sm:px-5 md:px-10 py-6 sm:py-8 md:py-10 lg:py-15"
      style={{
        backgroundColor: "#383086",
        height: "auto",
        minHeight: "32rem",
        paddingTop: "30px",
        paddingBottom: "40px"
      }}
      // Desktop styles preserved
      data-desktop-style={{
        height: "40.75rem",
        paddingTop: "40px",
        paddingBottom: "60px"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <h4 
            className="font-medium text-[20px] sm:text-[22px] md:text-[24px] md:font-medium mb-3 md:mb-4 tracking-wider poppins"
            style={{
              color: "#f1cf87",
            }}
          >
            RECOGNITIONS
          </h4>
          <p 
            className="text-white text-xs sm:text-sm md:text-[16px] md:font-medium leading-relaxed max-w-[587px] font-medium mx-auto text-center poppins px-2 md:px-5"
          >
            Ruchira has coached over several individuals across the world on the Science of Personalities, she not only inspires adults but kids too. She has published over 300 columns along with several children's books.
          </p>
        </div>

        {/* Recognition Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-5 md:gap-12 flex-nowrap w-full md:gap-x-10">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="flex-1 text-center mx-2 sm:mx-6 md:mx-12"
              style={{ minWidth: 'auto' }}
              // Desktop style preserved
              data-desktop-style={{ minWidth: '30%' }}
            >
              <LaurelWreath title={recognition.title} img={recognition.img} />
              <p
                className="text-white text-[10px] sm:text-xs md:text-[16px] md:font-medium poppins leading-4 sm:leading-5 md:leading-6 text-center font-medium mt-4 sm:mt-6 md:mt-10 px-1 sm:px-2 md:px-0"
              >
                {recognition.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecognitionsSection;