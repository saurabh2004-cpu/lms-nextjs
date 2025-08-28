import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        concern: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const concernOptions = [
        'General Inquiry',
        'Technical Support',
        'Business Partnership',
        'Feedback',
        'Other'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.concern) newErrors.concern = 'Please select your concern';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                concern: '',
                message: ''
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-2 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold poppins text-[#383086]">
                        Let's Walk Together
                    </h1>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                        {/* Left Column - Contact Info */}
                        <div className="space-y-8 md:space-y-10 lg:ml-20">
                            <div>
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold poppins text-[#383086] mb-3 md:mb-4">
                                    Address
                                </h2>
                                <p className="text-gray-700 text-sm md:text-[16px] leading-6">
                                    Lokmat Bhavan, Jalna Road<br />
                                    Aurangabad 431001<br />
                                    Maharashtra, India
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold poppins text-[#383086] mb-3 md:mb-4">
                                    Email
                                </h2>
                                <p className="text-gray-700 text-sm md:text-[16px]">
                                    Teamruchiradarda@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-full">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm md:text-[16px] font-medium poppins mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        className={`w-full px-4 md:px-5 py-2 border rounded-full text-gray-800 transition-all duration-200 ${errors.name ? 'border-red-500' : 'border-black'
                                            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm md:text-[16px] font-medium poppins mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className={`w-full px-4 md:px-5 py-2 border rounded-full text-gray-800 transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-black'
                                            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>

                                {/* Phone & Concern */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm md:text-[16px] font-medium poppins mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter phone number"
                                            className={`w-full px-4 md:px-5 py-2 border rounded-full text-gray-800 transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-black'
                                                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                        />
                                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                    </div>

                                    {/* Concern */}
                                    <div>
                                        <label htmlFor="concern" className="block text-sm md:text-[16px] font-medium poppins mb-1">
                                            Your Concern
                                        </label>
                                        <select
                                            id="concern"
                                            name="concern"
                                            value={formData.concern}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 md:px-5 py-2 border rounded-full text-gray-800 transition-all duration-200 ${errors.concern ? 'border-red-500' : 'border-black'
                                                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                        >
                                            <option value="">Select your concern</option>
                                            {concernOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                        {errors.concern && <p className="mt-1 text-sm text-red-600">{errors.concern}</p>}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm md:text-[16px] font-medium poppins mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Write your message"
                                        className={`w-full px-4 md:px-5 py-3 border rounded-lg text-gray-800 transition-all duration-200 ${errors.message ? 'border-red-500' : 'border-black'
                                            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    />
                                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                </div>

                                {/* Submit */}
                                <div className="flex justify-start pt-2 md:pt-4">
                                    <button
                                        type="submit"
                                        className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 md:py-3 px-5 md:px-6 rounded-full transition-all duration-200 text-sm md:text-base"
                                    >
                                        Contact Ruchira
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;