import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

// Constants
const TWITTER_HANDLE = 'madhavjha';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  // const [walletAddress, setWalletAddress] = React.useState(null);
  console.log({ solana: window.solana })
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">Portal</p>
          <p className="sub-text">
            Aloha! let's build this!
          </p>
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
