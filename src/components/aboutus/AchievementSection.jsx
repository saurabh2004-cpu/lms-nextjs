import React from 'react';

const RuchiraAchievementsSection = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between ">
                {/* Left side - Text content */}
                <div className="max-w-2xl lg:pr-8 md:max-w-[550px]">
                    <p 
                        className="text-sm md:text-base leading-relaxed text-shadow-md mb-6 font-[500] poppins"
                    >
                        She has fiercely led her team to establish Lokmat MahaMarathon as the most sought after running brand in
                        the state of Maharashtra.
                    </p>

                    <p 
                        className="text-sm md:text-base leading-relaxed text-shadow-md mb-6 font-[500] poppins"
                    >
                        With the event now being conducted in every major city of Maharashtra including Maha Mumbai, Nashik,
                        Aurangabad, Nagpur, Kolahpur and Pune.
                    </p>

                    <p 
                        className="text-sm md:text-base leading-relaxed text-shadow-md mb-6 font-[500] poppins"
                    >
                        Her brand Lokmat Campus Club recently made the Asia Book of Records for maximum children drawing on a
                        single day with 4.75 Lakh children in over 1000 schools participating in 35 districts of Maharashtra and
                        Goa.
                    </p>

                    <p 
                        className="text-sm md:text-base leading-relaxed text-shadow-md mb-6 font-[500] poppins"
                    >
                        Ruchira is a multi-talented, visionary and a fierce leader and entrepreneur, who never fails to inspire
                        the best in her audience,be it her colleagues,the business community or the youth.
                    </p>
                </div>

                {/* Right side - Image with golden background */}
                <div className="relative flex justify-center md:justify-center items-center ">
                    {/* Golden curved background */}
                    <div 
                        className="md:absolute md:mr-20 w-70 h-78 mr-4 md:mr-0   z-10 bg-[#f1cf87] absolute right-[-20px] top-5  rounded-[80px] md:w-90 md:h-100"
                    />

                    {/* Profile image */}
                    <img
                        src="/images/image-266.png"
                        alt="Ruchira at her office desk"
                        className="relative z-20 object-cover w-70 h-78 md:w-90 md:h-100 rounded-2xl absolute right-6 bottom-5"
                        // style={{
                        //     width: '25.9375rem',
                        //     height: '29.1875rem',
                        //     borderRadius: '40px',
                        //     right: '22px',
                        //     bottom: '20px'
                        // }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RuchiraAchievementsSection;