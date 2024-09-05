<html>
<head>
    <title>Ton Ice</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
</head>
<body class="bg-gray-900 text-white font-sans">
    <div id="root"></div>
    <script type="text/babel">
        function App() {
            const [ice, setIce] = React.useState(1969);
            const [currentIcePerHour, setCurrentIcePerHour] = React.useState(891);
            const [upgradeCost, setUpgradeCost] = React.useState(7590);
            const [icePerHourIncrease, setIcePerHourIncrease] = React.useState(298);
            const [lastActivity, setLastActivity] = React.useState(Date.now());

            React.useEffect(() => {
                const interval = setInterval(() => {
                    const hoursSinceLastActivity = (Date.now() - lastActivity) / (1000 * 60 * 60);
                    if (hoursSinceLastActivity <= 3) {
                        setIce(prevIce => prevIce + currentIcePerHour);
                    }
                }, 3600000); // 1 hour in milliseconds

                return () => clearInterval(interval);
            }, [lastActivity, currentIcePerHour]);

            const handleUpgrade = () => {
                if (ice >= upgradeCost) {
                    setIce(ice - upgradeCost);
                    setCurrentIcePerHour(currentIcePerHour + icePerHourIncrease);
                    setUpgradeCost(Math.round(upgradeCost * 1.2));
                    setIcePerHourIncrease(Math.round(icePerHourIncrease * 1.2));
                    setLastActivity(Date.now());
                } else {
                    alert("Not enough ice to upgrade!");
                }
            };

            const navigateTo = (page) => {
                alert(`Navigating to ${page} page...`);
            };

            return (
                <div className="flex flex-col items-center p-4">
                    <div className="w-full max-w-md">
                        <div className="flex items-center justify-between bg-gray-800 p-2 rounded-t-lg">
                            <i className="fas fa-arrow-left text-white"></i>
                            <h1 className="text-white text-lg">Ton Ice</h1>
                            <i className="fas fa-ellipsis-v text-white"></i>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-b-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
                                        <i className="fas fa-user text-black"></i>
                                    </div>
                                    <span className="ml-2 text-white">bijan</span>
                                </div>
                                <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                                    <span className="text-green-500 mr-1">Sync</span>
                                    <span className="text-white">Ice per hour</span>
                                    <span className="text-blue-500 ml-1">+{currentIcePerHour}</span>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg mb-4">
                                <h2 className="text-center text-xl mb-4">Upgrade Ice Production</h2>
                                <div className="flex justify-center mb-4">
                                    <i className="fas fa-cube text-blue-500 text-4xl"></i>
                                    <span className="text-4xl ml-2">{ice}</span>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                                    <div className="flex justify-between mb-2">
                                        <span>Current ice per hour:</span>
                                        <span className="text-yellow-500">{currentIcePerHour}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Upgrade cost:</span>
                                        <span className="text-yellow-500">{(upgradeCost / 1000).toFixed(2)}K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Ice per hour increase:</span>
                                        <span className="text-yellow-500">+{icePerHourIncrease}</span>
                                    </div>
                                </div>
                                <button onClick={handleUpgrade} className="bg-gray-600 text-white py-2 px-4 rounded-lg w-full">Upgrade</button>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-info-circle text-yellow-500 mr-2"></i>
                                    <span>Your mine automatically produces ice for up to <span className="font-bold">3 hours</span> after your last activity. Make sure to check in regularly to maximize your ice production!</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around bg-gray-800 p-2 rounded-b-lg mt-4">
                            <div className="flex flex-col items-center" onClick={() => navigateTo('Game')}>
                                <i className="fas fa-cube text-blue-500"></i>
                                <span className="text-white text-sm">Game</span>
                            </div>
                            <div className="flex flex-col items-center" onClick={() => navigateTo('Mine')}>
                                <i className="fas fa-hammer text-white"></i>
                                <span className="text-white text-sm">Mine</span>
                            </div>
                            <div className="flex flex-col items-center" onClick={() => navigateTo('Friends')}>
                                <i className="fas fa-users text-white"></i>
                                <span className="text-white text-sm">Friends</span>
                            </div>
                            <div className="flex flex-col items-center" onClick={() => navigateTo('Earn')}>
                                <i className="fas fa-coins text-white"></i>
                                <span className="text-white text-sm">Earn</span>
                            </div>
                            <div className="flex flex-col items-center" onClick={() => navigateTo('Airdrop')}>
                                <i className="fas fa-gift text-blue-500"></i>
                                <span className="text-white text-sm">Airdrop</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>