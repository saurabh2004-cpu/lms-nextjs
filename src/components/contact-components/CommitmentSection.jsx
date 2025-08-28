import React from 'react';

const CommitmentSection = () => {
    const commitmentText = [
        {
            section: [
                "I am unconditional love.",
                "I live life of freedom and serve powerfully.",
                "I am presence, I love wholeheartedly.",
                "I create a sacred space for you, with love."
            ]
        },
        {
            section: [
                "I will respect you no matter what.",
                "I will listen to you non-judgmentally.",
                "I will not fix you, for you are not broken.",
                "I will not rescue you, for you are not powerless."
            ]
        },
        {
            section: [
                "I will not heal you for I see you in your wholeness.",
                "I will not preach to you, there is enough information on Google.",
                "I will co-create a space with you where clarity and growth happens."
            ]
        },
        {
            section: [
                "I will walk with you through the darkness, as you remember your light.",
                "Together, we will create magic."
            ]
        }
    ];

    return (
        <div className="relative w-full py-8 md:py-12 lg:py-20 px-4 md:px-8 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-xl md:text-2xl lg:text-[32px] font-semibold md:font-[600] text-black poppins relative md:pb-10">
                        My commitment to me & you...
                    </h2>
                </div>

                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                        {/* Hexagonal pattern background */}
                        {Array.from({ length: 8 }, (_, row) =>
                            Array.from({ length: 12 }, (_, col) => (
                                <polygon
                                    key={`${row}-${col}`}
                                    points="50,0 100,25 100,75 50,100 0,75 0,25"
                                    fill="none"
                                    stroke="#d4af37"
                                    strokeWidth="2"
                                    transform={`translate(${col * 90 + (row % 2) * 45}, ${row * 65})`}
                                />
                            ))
                        )}
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col-reverse min-h-[300px] md:h-[456px] justify-center lg:justify-end items-center lg:flex-row gap-6 md:gap-8 lg:gap-12">
                    {/* Left Side - Image Card */}
                    <div className="flex-shrink-0 order-2 lg:order-1 w-full md:w-auto">
                        <div className="relative">
                            {/* Profile Image */}
                            <div className="relative rounded-3xl overflow-hidden p-3 md:p-4">
                                <img
                                    src="/images/contact-1.png"
                                    alt="Ruchira"
                                    className="w-full max-w-md h-full md:max-w-none  md:h-64 lg:h-auto object-cover rounded-2xl mx-auto"
                                    onError={(e) => {
                                        e.target.src = "/images/contact-1.png";
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Commitment Text */}
                    <div className="flex-1 order-1 lg:order-2 max-w-2xl w-full">
                        <div className="space-y-4 md:space-y-6">
                            {commitmentText.map((block, blockIndex) => (
                                <div key={blockIndex} className="">
                                    {block.section.map((text, textIndex) => (
                                        <p
                                            key={textIndex}
                                            className="text-xs md:text-sm lg:text-[16px] font-medium md:font-[500] poppins leading-relaxed"
                                        >
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            ))}

                            {/* Signature */}
                            <div className="mt-4 md:mt-6">
                                <p className="text-xs md:text-sm lg:text-[16px] font-medium md:font-[500] poppins">Love,</p>
                                <p className="text-xs md:text-sm lg:text-[16px] font-medium md:font-[500] poppins">
                                    Ruchira
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CommitmentSection;