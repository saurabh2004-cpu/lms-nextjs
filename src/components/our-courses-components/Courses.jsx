import React from 'react';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    id: '1',
    title: 'Parenting Journey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: '2',
    title: 'Personal Growth Masterclass',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: '3',
    title: 'Path to Self-Mastery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: '4',
    title: 'Journey to Self-Discovery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: '5',
    title: 'General English',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    id: '6',
    title: 'General English',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  }
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="p-4 sm:p-6 sm:pb-4">
        <h3 className="text-lg sm:text-xl md:text-[24px] text-[#383086] font-normal sm:font-[400] poppins mb-2 sm:mb-3 leading-tight">
          {course.title}
        </h3>
        <p className="text-sm sm:text-base md:text-[1rem] text-gray-600 font-normal sm:font-[400] poppins leading-relaxed mb-3 sm:mb-4">
          {course.description}
        </p>
        <button className="text-sm sm:text-base md:text-[1rem] relative left-50 top-9 z-10 font-normal sm:font-[400] poppins inline-flex items-center gap-2 bg-[#f1cf87] text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-colors duration-200 group">
          Learn more
        </button>
      </div>
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

const CoursesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium sm:font-[500] poppins text-black tracking-wide">
          OUR COURSES
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-y-24">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;