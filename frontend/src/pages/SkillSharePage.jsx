import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MoreHorizontal, User, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

const SkillSharePage = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Hover animation for cards
  const cardHover = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  const questWinningPhotos = [
    { id: 'q1', src: '/api/placeholder/300/200', alt: 'Landscape with mountain' },
    { id: 'q2', src: '/api/placeholder/300/200', alt: 'Person on mountain at sunset' },
    { id: 'q3', src: '/api/placeholder/300/200', alt: 'Animals in natural habitat' },
    { id: 'q4', src: '/api/placeholder/300/200', alt: 'Landscape with mountain' },
    { id: 'q5', src: '/api/placeholder/300/200', alt: 'Person on mountain at sunset' },
    { id: 'q6', src: '/api/placeholder/300/200', alt: 'Animals in natural habitat' },
  ];

  const popularPhotos = [
    { id: 'p1', src: '/api/placeholder/300/200', alt: 'Snake eye closeup' },
    { id: 'p2', src: '/api/placeholder/300/200', alt: 'Abstract blue swirls' },
    { id: 'p3', src: '/api/placeholder/300/200', alt: 'Elephants walking in line' },
    { id: 'p4', src: '/api/placeholder/300/200', alt: 'Colorful festival masks' },
    { id: 'p5', src: '/api/placeholder/300/200', alt: 'Snake eye closeup' },
    { id: 'p6', src: '/api/placeholder/300/200', alt: 'Abstract blue swirls' },
    { id: 'p7', src: '/api/placeholder/300/200', alt: 'Elephants walking in line' },
    { id: 'p8', src: '/api/placeholder/300/200', alt: 'Colorful festival masks' },
  ];

  const categories = [
    { id: 'c1', name: 'City and Architecture', src: '/api/placeholder/300/200' },
    { id: 'c2', name: 'Landscapes', src: '/api/placeholder/300/200' },
    { id: 'c3', name: 'Nature', src: '/api/placeholder/300/200' },
    { id: 'c4', name: 'Animal', src: '/api/placeholder/300/200' },
    { id: 'c5', name: 'People', src: '/api/placeholder/300/200' },
    { id: 'c6', name: 'Macro', src: '/api/placeholder/300/200' },
  ];

  const photographers = [
    {
      id: 'ph1',
      name: 'Richard Beresford Harris',
      location: 'Helsinki, Finland',
      avatar: '/api/placeholder/50/50',
      photos: [
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
      ]
    },
    {
      id: 'ph2',
      name: 'Richard Beresford Harris',
      location: 'Helsinki, Finland',
      avatar: '/api/placeholder/50/50',
      photos: [
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
      ]
    },
    {
      id: 'ph3',
      name: 'Richard Beresford Harris',
      location: 'Helsinki, Finland',
      avatar: '/api/placeholder/50/50',
      photos: [
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
      ]
    },
  ];

  const PhotoCard = ({ photo, size = "md" }) => {
    const sizeClasses = {
      sm: "h-24 w-24",
      md: "h-44 w-full",
      lg: "h-40 w-full"
    };

    return (
      <motion.div
        className="overflow-hidden rounded-lg relative"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className={`${sizeClasses[size]} object-cover`}
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2">
          <button
            className={`rounded-full p-1 bg-white bg-opacity-80 ${favorites[photo.id] ? 'text-red-500' : 'text-gray-700'}`}
            onClick={() => toggleFavorite(photo.id)}
          >
            <Heart size={18} fill={favorites[photo.id] ? 'currentColor' : 'none'} />
          </button>
          <button className="rounded-full p-1 bg-white bg-opacity-80 text-gray-700">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </motion.div>
    );
  };

  const CategoryCard = ({ category }) => {
    return (
      <motion.div
        className="rounded-lg overflow-hidden relative h-32"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        <img
          src={category.src}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h3 className="text-white font-bold text-lg">{category.name}</h3>
        </div>
      </motion.div>
    );
  };

  const PhotographerCard = ({ photographer }) => {
    return (
      <motion.div
        className="border rounded-lg p-4 flex flex-col items-center"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        <div className="grid grid-cols-2 gap-2 mb-4">
          {photographer.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${photographer.name}'s work ${index}`}
              className="w-full h-16 object-cover rounded"
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <img
            src={photographer.avatar}
            alt={photographer.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <h3 className="font-bold text-sm mt-2">{photographer.name}</h3>
          <p className="text-xs text-gray-500">{photographer.location}</p>
          <button className="mt-2 bg-blue-500 text-white text-sm rounded-full px-4 py-1">
            Follow
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-black text-white p-4 flex justify-between items-center">
        <div className="w-24"></div> {/* Empty div for spacing */}
        <div className="flex items-center space-x-4">
          <User size={20} />
          <Bell size={20} />
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
            Upload
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto w-full px-4 py-6">
        {/* Quest Winning Photos */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-2">Quest Winning Photos</h2>
          <p className="text-sm text-gray-600 mb-4">
            Discover the latest Pixel Master Quest-winning photos and top-rated masterpieces from our vibrant photography
            community.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {questWinningPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </motion.section>

        {/* Popular Photos */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-4">Popular Photos</h2>
          <div className="grid grid-cols-4 gap-4">
            {popularPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </motion.section>

        {/* Top Categories */}
        <motion.section
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-4">Top Categories</h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </motion.section>

        {/* Featured Photographers */}
        <motion.section
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-2">Featured Photographers</h2>
          <p className="text-sm text-gray-600 mb-4">
            Photographers we think you should check out
          </p>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {photographers.map((photographer) => (
              <PhotographerCard key={photographer.id} photographer={photographer} />
            ))}
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6">
            <button className="rounded-full bg-white shadow-md w-8 h-8 flex items-center justify-center">
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6">
            <button className="rounded-full bg-white shadow-md w-8 h-8 flex items-center justify-center">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default SkillSharePage;