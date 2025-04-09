import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';

const CourseManagementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Staggered animation for course cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="fill-current text-yellow-500" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={16} className="fill-current text-yellow-500" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }
    
    return stars;
  };

  const courses = [
    {
      id: 1,
      title: "Mastering Light: The Art of Perfect Exposure",
      image: "/api/placeholder/300/200",
      rating: 4.2,
      price: 10.45,
      description: "Lorem Ipsum is simply dummy text of the"
    },
    {
      id: 2,
      title: "Beyond Auto Mode: Manual Photography Essentials",
      image: "/api/placeholder/300/200",
      rating: 4.2,
      price: 23.45,
      description: "Lorem Ipsum is simply dummy text of the"
    },
    {
      id: 3,
      title: "Storytelling Through Lenses: A Guide to Composition",
      image: "/api/placeholder/300/200",
      rating: 4.2,
      price: 10.45,
      description: "Lorem Ipsum is simply dummy text of the"
    },
    {
      id: 4,
      title: "Editing Like a Pro: Lightroom & Photoshop Mastery",
      image: "/api/placeholder/300/200",
      rating: 4.2,
      price: 10.45,
      description: "Lorem Ipsum is simply dummy text of the"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-black text-white p-4 flex justify-end">
        <button className="mr-4 hover:text-gray-300 transition-colors">Login</button>
        <button className="hover:text-gray-300 transition-colors">SignUp</button>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Course Management & Administration Made Easy
        </motion.h1>

        {/* Hero Banner */}
        <motion.div
          className="relative w-full rounded-lg overflow-hidden mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/api/placeholder/1000/400" 
            alt="Camera filming graffiti" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <h2 className="text-white text-3xl font-bold px-8">Keep moving up</h2>
          </div>
        </motion.div>

        {/* Courses Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Learners are viewing</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {courses.map((course) => (
              <motion.div 
                key={course.id}
                className="border rounded-lg overflow-hidden flex flex-col"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">{course.description}</p>
                  <div className="flex items-center mt-auto">
                    <span className="font-bold text-red-600 mr-2">{course.rating}</span>
                    <div className="flex">
                      {renderStarRating(course.rating)}
                    </div>
                  </div>
                  <p className="font-bold mt-2">${course.price.toFixed(2)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseManagementPage;