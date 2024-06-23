import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-flex">
        <div>
          <h3>Welcome to pixova lite</h3>
        </div>
        <div className="line"></div>
        <div>
          <h1>
            Free & Modern One-Page Parallax <br /> WordPress Theme
          </h1>
        </div>
        <div>
          <p>
            Your cool business headline here. You can even{" "}
            <span>
              <a href="#">insert HTML here & images</a>
            </span>
            . Lorem ipsum dolor sit amet lorem dolor sit amet.
          </p>
        </div>
        <div className="buttons">
          <div className="learn-more">Learn More</div>
          <div className="contact-us">Contact us</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
