import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import React from 'react';

// Constants
const TWITTER_HANDLE = 'madhavjha';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;



const App = () => {

  const [walletAddress, setWalletAddress] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  const connectWallet = async () => {
    try {
      const {solana} = window;
      if(solana && solana.isPhantom) {
          console.log("Phantom wallet found")
          const resp = await solana.connect()
          setWalletAddress(resp.publicKey.toString())
          setMessage({type: "success", message: "Yay! you are connected!"});
      } else {
        setMessage({type: "error", message: "No Phantom wallet found"});
      }
    } catch(error) {
      console.log(error);
    }
  }
  const ShowResult = () => message && <p style={message.type === 'success' ? {color: 'green'}: {color: 'red'}}>{message.message}</p>

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">Portal</p>
          <p className="sub-text">
            Aloha! let's build this!
          </p>
          {message && <ShowResult />}
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
