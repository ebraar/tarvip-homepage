"use client"
import React, { useState, useEffect } from 'react';

const MobileProcessSteps = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 0.5 : 100)); // Sürekli ilerleme için sıfırlama
    }, 40); // Her 50ms'de bir ilerler

    return () => clearInterval(interval);
  }, []);

  const getStepClass = (step) => {
    const stepProgress = (step - 1) * 33.33; // 4 adım varsa her adım %33.33
    return progress >= stepProgress ? 'bg-green-500' : 'bg-blue-100';
  };

  return (
    <div className="bg-blue-950 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center relative">
        <div className="absolute left-1/2 sm:left-0 top-0 sm:top-1/2 w-1 sm:w-full h-full sm:h-1 bg-blue-100 transform -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/2 z-0">
          <div className="h-full sm:h-1 w-1 sm:w-full bg-green-500 transition-all duration-700 ease-linear" style={{ height: `${progress}%`, width: '100%' }}></div>
        </div>
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex flex-col sm:flex-row items-center relative z-10 mb-8 sm:mb-0 sm:mr-8">
            <div className={`rounded-full w-8 h-8 mb-2 sm:mb-0 sm:mr-2 transition-all duration-700 ease-linear z-20 ${getStepClass(step)}`}></div>
            <p className={`font-bold text-ml transition-opacity duration-500 ease-linear ${progress >= (step - 1) * 33.33 ? 'opacity-100' : 'opacity-50'}`}>
              {step === 1 && 'Dosya Yükle'}
              {step === 2 && 'Süreci Belirle'}
              {step === 3 && 'Sipariş Ver'}
              {step === 4 && 'Teslim!'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProcessSteps;
