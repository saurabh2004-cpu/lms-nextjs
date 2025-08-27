import React from 'react';

const CoachingSection = () => {
    return (
        <section className="w-full px-4 md:px-8 lg:px-12 py-10 poppins relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center md:max-w-7xl mx-auto">

                {/* LEFT COLUMN - IMAGE */}
                <div className="md:absolute md:col-span-6 flex justify-center md:justify-start z-10">
                    <div className="md:absolute md:static -left-4 md:left-24 mt-[-16px] md:mt-3 w-full md:mb-40   overflow-hidden shadow-lg">
                        <img
                            src="/images/Rectangle-729.png"
                            alt="Ruchira working at her desk"
                            className="md:w-[374px] md:h-[446px] object-cover"
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN - TEXT */}
                <div className="md:col-span-9 flex  justify-center md:absolute md:relative md:left-70">
                    <div className="bg-[#383086] md:h-[449px] text-white p-6 md:p-10 md:pl-18 rounded-lg w-full h-auto md:h-[35.75rem] flex flex-col justify-center">

                        <p className="text-sm md:text-base leading-relaxed font-medium  md:ml-28 ">
                            She recently spoke at a TEDx event on  ‘Show the knowledge of personality science can reduce divorces due to incompatibility’
                        </p>

                        <p className="text-sm md:text-base leading-relaxed font-medium mb-6 md:ml-28">
                            Ruchira has coached thousands of individuals across the world on the Science of Personalities and on the nuances of Parenting.

                        </p>

                        <p className="text-sm md:text-base leading-relaxed font-medium mb-6 md:ml-28">
                            She has conducted In-Depth sessions on Personalities EO & YPO Forums in Nepal, Delhi, Pune, Coimbatore and Mumbai.
                        </p>

                        <p className="text-sm md:text-base leading-relaxed font-medium md:ml-28 md:mb-5">
                            She has conducted workshops for teenagers on Identifying Personalities and on using the knowledge to carve out great relationships and to design work and study schedules.
                        </p>

                        <p className="text-sm md:text-base leading-relaxed font-medium md:ml-28">
                            She conducted a workshop titled Understanding Others by BEing Yourself’ for Round Table, Gwalior.She has conducted sessions on the Secrets of Being Happy.
                        </p>

                        <p className="text-sm md:text-base leading-relaxed font-medium md:ml-28">
                            She has conducted sessions on the Secrets of Being Happy.
                        </p>

                    </div>
                </div>

            </div>
            {/* Personal Information Button */}
            <button
                className="bg-[#383086] md:mt-10 border-2 border-white rounded-[20px] text-[#f1cf87] px-5 py-2 text-[15px] font-medium poppins cursor-pointer mb-4 transition-all duration-300 ease-in-out relative left-[5%] top-[50px]"
            >
                Personal Information
            </button>

            {/* Personal Information Paragraph */}
            <p
                className="m-0 text-sm text-[#333] bg-white p-4 rounded-lg mt-4 font-medium poppins relative left-[5%] top-[20px]"
            >
                Married to Karan Darda, Executive Director of the Lokmat Media Group 2 children, Aryaveer and Adhiraj.
            </p>
        </section>
    );
};

export default CoachingSection;