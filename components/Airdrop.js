<html>
<head>
    <title>Airdrop Tasks</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
</head>
<body class="bg-gray-900 text-white font-sans">
    <div class="flex flex-col items-center justify-center min-h-screen p-4" id="root"></div>
    <script type="text/babel">
        const { useState } = React;

        const App = () => {
            const [walletAddress, setWalletAddress] = useState(null);
            const [activeTab, setActiveTab] = useState('airdrop');

            const connectWallet = async () => {
                try {
                    const response = await window.tonkeeper.connect();
                    setWalletAddress(response.address);
                } catch (error) {
                    console.error("Error connecting to wallet:", error);
                }
            };

            const renderContent = () => {
                switch (activeTab) {
                    case 'game':
                        return <div className="text-center">Game Page Content</div>;
                    case 'mine':
                        return <div className="text-center">Mine Page Content</div>;
                    case 'friends':
                        return <div className="text-center">Friends Page Content</div>;
                    case 'earn':
                        return <div className="text-center">Earn Page Content</div>;
                    case 'airdrop':
                    default:
                        return (
                            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
                                <div className="flex justify-center mb-4">
                                    <img src="https://placehold.co/100x100" alt="Ice cube icon" className="w-20 h-20" />
                                </div>
                                <h1 className="text-2xl font-bold text-center mb-2">Airdrop Tasks</h1>
                                <p className="text-center text-gray-400 mb-6">There is a list of challenges below. Complete them to qualify for the Airdrop.</p>
                                <div className="mb-6">
                                    <h2 className="text-lg font-semibold mb-2">Wallet</h2>
                                    <button onClick={connectWallet} className="flex items-center justify-between w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
                                        <div className="flex items-center">
                                            <i className="fas fa-wallet w-6 h-6 mr-2"></i>
                                            <span>{walletAddress ? walletAddress : "Connect your TON wallet"}</span>
                                        </div>
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                                <div>
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
                        );
                }
            };

            return (
                <div className="flex flex-col items-center justify-center min-h-screen p-4">
                    {renderContent()}
                    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-around">
                        <div className="flex flex-col items-center" onClick={() => setActiveTab('game')}>
                            <i className="fas fa-gamepad w-6 h-6 mb-1"></i>
                            <span className="text-xs">Game</span>
                        </div>
                        <div className="flex flex-col items-center" onClick={() => setActiveTab('mine')}>
                            <i className="fas fa-hammer w-6 h-6 mb-1"></i>
                            <span className="text-xs">Mine</span>
                        </div>
                        <div className="flex flex-col items-center" onClick={() => setActiveTab('friends')}>
                            <i className="fas fa-users w-6 h-6 mb-1"></i>
                            <span className="text-xs">Friends</span>
                        </div>
                        <div className="flex flex-col items-center" onClick={() => setActiveTab('earn')}>
                            <i className="fas fa-coins w-6 h-6 mb-1"></i>
                            <span className="text-xs">Earn</span>
                        </div>
                        <div className="flex flex-col items-center" onClick={() => setActiveTab('airdrop')}>
                            <i className="fas fa-gift w-6 h-6 mb-1"></i>
                            <span className="text-xs">Airdrop</span>
                        </div>
                    </div>
                </div>
            );
        };

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
    <script>
        window.tonkeeper = {
            connect: async () => {
                // Mock function to simulate connecting to TON Keeper wallet
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({ address: "0:abcdef1234567890" });
                    }, 1000);
                });
            }
        };
    </script>
</body>
</html>