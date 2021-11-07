import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import React from 'react';

// Constants
const TWITTER_HANDLE = 'madhavjha';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const checkIfWalletIsConnected = async () => {
    const {solana} = window;
    if(solana && solana.isPhantom) {
      console.log("Phantom wallet found")
      const resp = await solana.connect({ onlyIfTrusted: true })
      console.log(resp.publicKey.toString())
    } else {
      console.log("No Phantom wallet detected")
    }
}

const App = () => {

  const [walletAddress, setWalletAddress] = React.useState(null);
  
  React.useEffect(() => {
    window.addEventListener('load', async () => {
      await checkIfWalletIsConnected();
    })
  }, [])

  const connectWallet = async () => setWalletAddress("cool");
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">Portal</p>
          <p className="sub-text">
            Aloha! let's build this!
          </p>
          {!walletAddress && <button className="cta-button connect-wallet-button" onClick={connectWallet}>
          Connect to Wallet
          </button>}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
