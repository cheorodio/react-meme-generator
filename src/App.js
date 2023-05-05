import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import Header from './Header.js';
import { memeImages } from './images';
import Options from './Options.js';

export default function App() {
  const [topText, setTopText] = useState('_');
  const [bottomText, setBottomText] = useState('_');
  const [meme, setMeme] = useState('kermit');
  const [generateMeme, setGenerateMeme] = useState(
    `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.jpg`,
  );

  function generate(e) {
    e.preventDefault();
    setGenerateMeme(
      `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.jpg`,
    );
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
          <p>Choose your meme template</p>
          <Options />
          <form>
            <label htmlFor="meme">
              Meme Template
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
            <label htmlFor="Top text">
              Top text
              <input
                placeholder="Top text"
                value={topText}
                onChange={(e) => {
                  setTopText(e.target.value);
                }}
                {...console.log(topText)}
              />
            </label>
            <label htmlFor="Bottom text">
              Bottom text
              <input
                placeholder="Bottom text"
                value={bottomText}
                onChange={(e) => {
                  setBottomText(e.target.value);
                }}
              />
            </label>
            <button className="btn" onClick={generate}>
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
