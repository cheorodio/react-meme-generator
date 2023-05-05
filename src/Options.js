import { memeImages } from './images.js';

export default function Options() {
  return (
    <>
      <div className="image-area">
        {memeImages.map((slide) => (
          <img
            key={`slide-${slide.img}`}
            className="images"
            src={slide.img}
            alt="memes"
          />
        ))}
      </div>
      <div className="meme-names">
        <div>
          <p>kermit</p>
          <p>agnes</p>
          <p>bad</p>
          <p>bihw</p>
          <p>bilbo</p>
        </div>
        <div>
          <p>bs</p>
          <p>cake</p>
          <p>captain</p>
          <p>cb</p>
          <p>doge</p>
        </div>
      </div>
    </>
  );
}
