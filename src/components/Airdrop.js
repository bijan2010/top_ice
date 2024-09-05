import React from 'react';

const Airdrop = () => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* محتوای صفحه Airdrop */}
      <h1>Airdrop Page</h1>
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="https://placehold.co/100x100" alt="Ice cube icon" className="w-20 h-20" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Airdrop Tasks</h1>
        <p className="text-center text-gray-400 mb-6">
          There is a list of challenges below. Complete them to qualify for the Airdrop.
        </p>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Tasks</h2>
          <div className="bg-gray-700 rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fas fa-medal w-6 h-6 mr-2"></i>
              <div>
                <p className="font-semibold">Ice Age Advancement</p>
                <p className="text-gray-400">+500K</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">0.5 TON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
