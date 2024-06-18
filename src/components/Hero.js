import React, { useState } from 'react';
import PetGroomingContent from './PetGroomingContent'; // Import content components
import PetClinicContent from './PetClinicContent'; // Placeholder content component
import PetDaycareContent from './PetDaycareContent'; // Placeholder content component
import PetTrainingContent from './PetTrainingContent'; // Placeholder content component
import dog4Image from '../assets/dog4.png'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Pet Grooming'); // State to manage active tab

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update active tab state
  };

  return (
    <section className="bg-yellow-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Categories</h1>
          <h2 className="text-2xl font-bold mb-2">{activeTab}</h2>
          {activeTab === 'Pet Grooming' && <PetGroomingContent />}
          {activeTab === 'Pet Clinic' && <PetClinicContent />}
          {activeTab === 'Pet Daycare' && <PetDaycareContent />}
          {activeTab === 'Pet Training' && <PetTrainingContent />} 
          <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded">Get Started</button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Display different content based on active tab */}
          {activeTab === 'Pet Grooming' && <img  src={dog4Image} alt="Pet Grooming" className="rounded-full" />}
          {activeTab === 'Pet Clinic' && <img src={dog4Image} alt="Pet Clinic" className="rounded-full" />}
          {activeTab === 'Pet Daycare' && <img src={dog4Image} alt="Pet Daycare" className="rounded-full" />}
          {activeTab === 'Pet Training' && <img src={dog4Image} alt="Pet Training" className="rounded-full" />}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex justify-center space-x-4">
        {/* Buttons to change active tab */}
        <button
          className={`font-semibold py-2 px-4 rounded ${activeTab === 'Pet Grooming' ? 'bg-teal-600 text-white' : 'text-yellow-600'}`}
          onClick={() => handleTabClick('Pet Grooming')}
        >
          Pet Grooming
        </button>
        <button
          className={`font-semibold py-2 px-4 rounded ${activeTab === 'Pet Clinic' ? 'bg-teal-600 text-white' : 'text-yellow-600'}`}
          onClick={() => handleTabClick('Pet Clinic')}
        >
          Pet Clinic
        </button>
        <button
          className={`font-semibold py-2 px-4 rounded ${activeTab === 'Pet Daycare' ? 'bg-teal-600 text-white' : 'text-yellow-600'}`}
          onClick={() => handleTabClick('Pet Daycare')}
        >
          Pet Daycare
        </button>
        <button
          className={`font-semibold py-2 px-4 rounded ${activeTab === 'Pet Training' ? 'bg-teal-600 text-white' : 'text-yellow-600'}`}
          onClick={() => handleTabClick('Pet Training')}
        >
          Pet Training
        </button>
      </div>
    </section>
  );
};

export default Hero;
