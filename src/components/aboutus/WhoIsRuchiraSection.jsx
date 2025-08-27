"use client"

export default function WhoIsRuchiraSection() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <h2 className="text-center mb-8 md:mb-12 text-[24px] md:text-[28px] lg:text-[32px] font-semibold md:font-bold text-[#383086] poppins">
        Who is Ruchira Darda?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 items-start lg:items-center gap-6 md:gap-8 max-w-7xl mx-auto">
        {/* MOBILE/TABLET ORDER - IMAGE FIRST */}
        <div className="lg:hidden relative  flex justify-center mb-6">
          <div className="relative bg-[#f5ebd8] rounded-[24px_0px_80px_0px] md:rounded-[34px_0px_150px_0px] overflow-hidden shadow-lg w-full md:w-[426px] md:h-[411px]">
            {/* Decorative Circle */}
            <div className="md:absolute top-6 md:top-10 left-6 md:left-8 w-20 md:w-28 h-20 md:h-28 rounded-full border-2 border-[#f4cf87] shadow-md flex items-center justify-center z-20">
            </div>

            {/* Image */}
            <img
              src="/images/image-removebg-preview-2.png"
              alt="Speaker with microphone"
              className="relative z-10 w-full h-[300px] md:h-[450px] object-cover"
            />
          </div>
        </div>

        {/* LEFT COLUMN - TEXT */}
        <div className="lg:col-span-7 space-y-3 md:space-y-4 poppins font-[500]  md:max-w-[600px]">
          <p className="text-black text-[14px] md:text-[16px] leading-relaxed poppins text-shadow-md">
            Ruchira is a SoBo girl from Cathedral and John Connon High School, a Bachelor's degree in Commerce from H.R. College, Mumbai and an LLB from Government Law College, Mumbai.
          </p>

          <p className="text-black text-[14px] md:text-[16px] leading-relaxed poppins text-shadow-md">
            She is an ACC Certified Coach and is in the process of becoming an ICF certified coach.
          </p>

          <p className="text-black text-[14px] md:text-[16px] leading-relaxed poppins text-shadow-md">
            She is a Certified NLP Practitioner.
          </p>

          <p className="text-black text-[14px] md:text-[16px] leading-relaxed poppins text-shadow-md">
            She is an author of 8 children's books.
          </p>

          <p className="text-black text-[14px] md:text-[16px] leading-relaxed poppins text-shadow-md">
            She is a Certified Parenting & Family Coach, Mindfulness Practitioner, a sought after Motivational Speaker and a columnist with over 300 columns published in Lokmat Times.
          </p>

          <p className="text-black text-[14px] md:text-[16px] leading-relaxed poppins text-shadow-md">
            She is the Director of Lokmat MahaMarathon, a six city circuit which saw over 55000 participants in the 2023-24 season.
          </p>

          <p className="text-black text-[14px] md:text-[16px] leading-relaxed poppins text-shadow-md">
            She is the Founder President of Wider Opportunities for Women – a women's club formed with the sole intent to further the quest for learning and experiencing the world.
          </p>

          <p className="text-black text-[14px] md:text-[16px] leading-relaxed poppins text-shadow-md">
            She is the Director of Lokmat Campus Club, a platform for students to learn, experience and compete. It has an enormous strength of 2 lakh members across the state of Maharashtra.
          </p>
        </div>

        {/* RIGHT COLUMN - IMAGE CARD (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-5 relative flex justify-center">
          <div className="relative bg-[#f5ebd8] rounded-[34px_0px_150px_0px] overflow-hidden shadow-lg w-full max-w-sm">
            {/* Decorative Circle */}
            <div className="absolute -top-10 -left-8 w-28 h-28 rounded-full border-2 border-[#f4cf87] shadow-md flex items-center justify-center z-20">
              {/* Optional rotating text inside can be added here */}
            </div>

            {/* Image */}
            <img
              src="/images/image-removebg-preview-2.png"
              alt="Speaker with microphone"
              className="relative z-10 w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}