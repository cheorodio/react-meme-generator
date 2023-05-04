import memeImage from './meme.png';

export default function Header() {
  return (
    <div>
      {' '}
      <div className="header">
        <img src={memeImage} alt="meme" />
        <h1>Meme Generator</h1>
        <div className="line" />
      </div>
    </div>
  );
}
