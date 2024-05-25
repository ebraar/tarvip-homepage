"use client"
import React, { useState, useEffect } from 'react';

const MobileProcessSteps = () => {
  const [progress, setProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([true, false, false, false]); // Başlangıç durumu
  const [stepVisible, setStepVisible] = useState([true, false, false, false]); // İlk adım başlangıçta görünür

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev < 100 ? prev + 0.6 : 100;
        const stepIndex = Math.floor(newProgress / 33.33);
        if (!visibleSteps[stepIndex] && newProgress % 33.33 <= 0.6) {
          setVisibleSteps((prevVisibleSteps) => {
            const newVisibleSteps = [...prevVisibleSteps];
            newVisibleSteps[stepIndex] = true;
            return newVisibleSteps;
          });
          // 50ms sonra metni görünür hale getir
          setTimeout(() => {
            setStepVisible((prevStepVisible) => {
              const newStepVisible = [...prevStepVisible];
              newStepVisible[stepIndex] = true;
              return newStepVisible;
            });
          }, 10);
        }
        return newProgress;
      });
    }, 50); // Her 60ms'de bir ilerler

    return () => clearInterval(interval);
  }, [visibleSteps]);

  const getStepClass = (step) => {
    const stepProgress = (step - 1) * 33.33; // 4 adım varsa her adım %33.33
    return progress >= stepProgress ? 'bg-blue-800' : 'bg-blue-100';
  };

  return (
    <div className="bg-blue-950 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between lg:items-center relative">
        <div className="absolute left-1/2 sm:left-0 top-0 sm:top-1/2 w-1 sm:w-full h-full sm:h-1 bg-blue-100 transform -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/3 z-0">
          <div className="h-full sm:h-1 w-1 sm:w-full bg-blue-800 transition-all duration-700 ease-linear" style={{ height: `${progress}%`, width: '100%' }}></div>
        </div>
        {[1, 2, 3, 4].map((step, index) => (
          <div key={step} className="flex flex-col sm:flex-row items-center relative z-10 mb-8 sm:mb-0 sm:mr-8">
            <div className={`rounded-full w-8 h-8 mb-2 sm:mb-0 sm:mr-2 transition-all duration-700 ease-linear z-20 ${getStepClass(step)}`}></div>
            <p
              className={`font-bold text-ml transition-opacity duration-500 ease-linear z-50 w-56 absolute shadow-2xl ${stepVisible[index] ? 'opacity-100' : 'opacity-0'}`}
              style={{ transform: step % 2 === 0 ? 'translateX(60%)' : 'translateX(-3%)' }}
            >
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
