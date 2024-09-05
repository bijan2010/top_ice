import React, { useState } from 'react';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);

    const inviteFriend = (bonus) => {
        const newFriend = { name: "New Friend", points: 0, bonus: bonus };
        setFriends([...friends, newFriend]);
        setTotalPoints(totalPoints + bonus);
    };

    const shareOnTelegram = (bonus) => {
        const referralCode = Math.random().toString(36).substring(2, 15);
        const referralLink = `https://t.me/tonice_clicker_bot/start?startapp=${referralCode}`;
        window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=Join%20Ton%20Ice%20and%20get%20${bonus}K%20points!`, '_blank');
        inviteFriend(bonus);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <i className="fas fa-times text-xl"></i>
                <h1 className="text-lg font-bold">Ton Ice</h1>
                <i className="fas fa-chevron-down text-xl"></i>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-bold mb-2">Invite Friends!</h2>
                <p className="text-gray-400 mb-4">You and your friend will receive bonuses</p>
                <div className="bg-gray-700 p-4 rounded-lg mb-2 flex items-center cursor-pointer" onClick={() => inviteFriend(5.00)}>
                    <img src="https://placehold.co/40x40" alt="Gift icon" className="mr-4"/>
                    <div>
                        <p className="font-bold">Invite a friend</p>
                        <p className="text-yellow-500">+5.00K for you and your friend</p>
                    </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg flex items-center cursor-pointer" onClick={() => shareOnTelegram(25.00)}>
                    <img src="https://placehold.co/40x40" alt="Gift icon" className="mr-4"/>
                    <div>
                        <p className="font-bold">Invite a friend with Telegram Premium</p>
                        <p className="text-yellow-500">+25.00K for you and your friend</p>
                    </div>
                </div>
                <p className="text-blue-500 text-center mt-4">More bonuses</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <h2 className="text-xl font-bold mb-2">List of your friends ({friends.length})</h2>
                {friends.length === 0 ? (
                    <p className="text-gray-400">No friends invited yet.</p>
                ) : (
                    friends.map((friend, index) => (
                        <div key={index} className="bg-gray-700 p-4 rounded-lg flex items-center mb-2">
                            <img src="https://placehold.co/40x40" alt="Gift icon" className="mr-4"/>
                            <div>
                                <p className="font-bold">{friend.name}</p>
                                <p className="text-gray-400">{friend.points.toFixed(2)}K points</p>
                            </div>
                            <p className="text-yellow-500 ml-auto">+{friend.bonus.toFixed(2)}K</p>
                        </div>
                    ))
                )}
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full mb-4" onClick={() => shareOnTelegram(5.00)}>Invite friend</button>
            <div className="flex justify-around text-gray-400">
                <div className="flex flex-col items-center">
                    <i className="fas fa-cube text-2xl"></i>
                    <p className="text-xs">Game</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-hammer text-2xl"></i>
                    <p className="text-xs">Mine</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-users text-2xl text-white"></i>
                    <p className="text-xs">Friends</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-coins text-2xl"></i>
                    <p className="text-xs">Earn</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fas fa-parachute-box text-2xl"></i>
                    <p className="text-xs">Airdrop</p>
                </div>
            </div>
        </div>
    );
};

export default Friends;
