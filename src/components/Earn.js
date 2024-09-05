import React from 'react';

const Earn = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="bg-gray-800 rounded-lg p-4 w-full max-w-md">
                <div className="flex justify-center mb-4">
                    <img src="https://placehold.co/100x100" alt="Ice cube icon" className="w-16 h-16"/>
                </div>
                <h1 className="text-center text-xl font-bold mb-4">Earn More Ice</h1>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Ice Youtube</h2>
                    <div className="bg-gray-700 rounded-lg p-4 mb-2 flex items-center">
                        <img src="https://placehold.co/40x40" alt="YouTube icon" className="w-10 h-10 mr-4"/>
                        <div className="flex-1">
                            <p>Set Up Telegram Mini App Clicker Game</p>
                            <div className="flex items-center">
                                <img src="https://placehold.co/20x20" alt="Ice cube icon" className="w-5 h-5 mr-1"/>
                                <span>+5.00K</span>
                            </div>
                        </div>
                        <i className="fas fa-clock text-yellow-500"></i>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 mb-2 flex items-center">
                        <img src="https://placehold.co/40x40" alt="YouTube icon" className="w-10 h-10 mr-4"/>
                        <div className="flex-1">
                            <p>How to Make a Hamster Kombat Clone</p>
                            <div className="flex items-center">
                                <img src="https://placehold.co/20x20" alt="Ice cube icon" className="w-5 h-5 mr-1"/>
                                <span>+5.00K</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 mb-2 flex items-center">
                        <img src="https://placehold.co/40x40" alt="YouTube icon" className="w-10 h-10 mr-4"/>
                        <div className="flex-1">
                            <p>How to Make a Notcoin Clone</p>
                            <div className="flex items-center">
                                <img src="https://placehold.co/20x20" alt="Ice cube icon" className="w-5 h-5 mr-1"/>
                                <span>+5.00K</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Tasks list</h2>
                    <div className="bg-gray-700 rounded-lg p-4 mb-2 flex items-center">
                        <img src="https://placehold.co/40x40" alt="Task icon" className="w-10 h-10 mr-4"/>
                        <div className="flex-1">
                            <p>Join Clicker Game News / Updates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-2 flex justify-around">
                <button onClick={() => window.location.href = 'game.html'} className="flex flex-col items-center">
                    <img src="https://placehold.co/40x40" alt="Game icon" className="w-10 h-10"/>
                    <span>Game</span>
                </button>
                <button onClick={() => window.location.href = 'mine.html'} className="flex flex-col items-center">
                    <img src="https://placehold.co/40x40" alt="Mine icon" className="w-10 h-10"/>
                    <span>Mine</span>
                </button>
                <button onClick={() => window.location.href = 'friends.html'} className="flex flex-col items-center">
                    <img src="https://placehold.co/40x40" alt="Friends icon" className="w-10 h-10"/>
                    <span>Friends</span>
                </button>
                <button className="flex flex-col items-center">
                    <img src="https://placehold.co/40x40" alt="Earn icon" className="w-10 h-10"/>
                    <span>Earn</span>
                </button>
                <button onClick={() => window.location.href = 'airdrop.html'} className="flex flex-col items-center">
                    <img src="https://placehold.co/40x40" alt="Airdrop icon" className="w-10 h-10"/>
                    <span>Airdrop</span>
                </button>
            </div>
        </div>
    );
};

export default Earn;
