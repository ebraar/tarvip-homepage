const ProcessSteps = () => {
    return (
        <div className="bg-blue-950 text-white py-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center relative space-x">
            <div className="absolute top-1/3 left-0 w-full h-1 bg-blue-100 transform -translate-y-1/2 z-0"></div>
            <div className="flex flex-col items-center relative z-10">
              <div className="bg-blue-100 rounded-full w-8 h-8 mb-2"></div>
              <p className="font-bold text-xl">Dosya Yükle</p>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="bg-blue-100 rounded-full w-8 h-8 mb-2"></div>
              <p className="font-bold text-xl">Süreci Belirle</p>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="bg-blue-100 rounded-full w-8 h-8 mb-2"></div>
              <p className="font-bold text-xl">Sipariş Ver</p>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="bg-blue-100 rounded-full w-8 h-8 mb-2"></div>
              <p className="font-bold text-xl">Teslim!</p>
            </div>
          </div>
        </div>
      );
  };
  
  export default ProcessSteps;
  