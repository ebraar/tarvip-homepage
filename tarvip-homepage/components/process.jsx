"use client"
import React, { useState, useEffect } from 'react';

const ProcessSteps = () => {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <786);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 0.5 : 100)); // Daha yavaş ilerleme için daha küçük artış
    }, 40); // Her 100ms'de bir ilerler

    return () => clearInterval(interval);
  }, []);

  const getStepClass = (step) => {
    const stepProgress = (step - 1) * 33.33; // 3 adım varsa her adım %33.33
    return progress >= stepProgress ? 'bg-green-500' : 'bg-blue-100';
  };

  return (
    <div className="bg-blue-950 text-white py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative space-x-4">
        <div className="absolute top-1/3 left-0 w-full h-1 bg-blue-100 transform -translate-y-1/2 z-0">
          <div className="h-1 bg-green-500 transition-all duration-700 ease-linear" style={{ width: `${progress}%` }}></div>
        </div>
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex flex-col items-center relative z-10">
            <div className={`rounded-full w-8 h-8 mb-2 transition-all duration-700 ease-linear ${getStepClass(step)}`}></div>
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
  
  export default ProcessSteps;