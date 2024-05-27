import React, { useEffect, useState } from 'react';

const ProcessSteps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch('/data/processSteps.json');
        const data = await response.json();
        setSteps(data);
      } catch (error) {
        console.error('Error fetching steps data:', error);
      }
    };

    fetchSteps();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center bg-blue-100">
       {/* {1920 px göre ayarlanıca} */}
      <h2 className="text-3xl font-extrabold mb-8 md:mb-12 lg:mb-14 text-blue-950 bg-blue-100">Süreç Nasıl İşliyor?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full bg-blue-100">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center bg-blue-100 h-full">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-900 mr-2">{step.id}</span>
              <img src={step.image} alt={`Step ${step.id}`} className="w-16 h-16 mx-auto" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-blue-950">{step.title}</h4>
            <p className="flex-grow text-xs font-semibold text-blue-900 whitespace-pre-line">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
