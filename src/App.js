import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import Header from './Header.js';
import { memeImages } from './images';
import Options from './Options.js';

export default function App() {
  const [meme, setMeme] = useState('kermit');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [generateMeme, setGenerateMeme] = useState(
    `https://api.memegen.link/images/kermit.jpg`,
  );

  function generate(e) {
    e.preventDefault();
    let memeUrl = `https://api.memegen.link/images/${meme}.jpg`;

    if (topText) {
      memeUrl = `https://api.memegen.link/images/${meme}/${topText}.jpg`;
    }

    if (bottomText) {
      memeUrl = `https://api.memegen.link/images/${meme}/_/${bottomText}.jpg`;
    }

    if (topText && bottomText) {
      memeUrl = `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.jpg`;
    }
    setGenerateMeme(memeUrl);
  }

  const handleClick = () => {
    const url = generateMeme;
    saveAs(url, meme);
  };

  return (
    <div className="container">
      <Header />

      <div className="meme-container">
        <div className="text-box">
          <Options />

          <form>
            <label>
              Meme template
              <select
                value={meme}
                onChange={(e) => {
                  setMeme(e.currentTarget.value);
                }}
              >
                {memeImages.map((slide) => (
                  <option key={`slide-${slide.detail}`}>{slide.detail}</option>
                ))}
              </select>
            </label>
            <label className="template-input">
              <input
                value={meme}
                onChange={(e) => {
                  setMeme(e.currentTarget.value);
                }}
              />
            </label>

            <label>
              Top text
              <br />
              <input
                placeholder="Please enter your top text"
                value={topText}
                onChange={(e) => {
                  setTopText(e.target.value);
                }}
              />
            </label>
            <label>
              Bottom text
              <br />
              <input
                placeholder="Please enter you bottom text"
                value={bottomText}
                onChange={(e) => {
                  setBottomText(e.target.value);
                }}
              />
            </label>

            <button
              data-test-id="generate-meme"
              className="btn"
              onClick={generate}
            >
              Generate
            </button>

            <button className="download" onClick={handleClick}>
              Download
              <span className="download-icon">
                {' '}
                <FiDownload />
              </span>
            </button>
          </form>
        </div>
        <img
          data-test-id="meme-image"
          className="meme-template"
          src={generateMeme}
          alt="Generated meme"
        />
      </div>
    </div>
  );
}
