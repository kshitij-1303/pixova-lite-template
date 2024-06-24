import "./about.css";

function About() {
  const services = [
    { name: "Web Design", percentage: 71 },
    { name: "Web Development", percentage: 88 },
    { name: "Print Design", percentage: 89 },
    { name: "Graphic Design", percentage: 61 },
  ];

  const handleService = services.map((service, index) => {
    return (
      <div className="services" key={index}>
        <div
          className="circle"
          style={{
            backgroundImage: `conic-gradient(#f2c351 ${
              service.percentage * 3.6
            }deg, #fff 0deg)`,
          }}
        >
          <span>{service.percentage}%</span>
        </div>
        <div className="service">{service.name}</div>
      </div>
    );
  });

  return (
    <section id="about">
      <div className="about-content">
        <div>
          <h3 className="about-heading">
            We build solutions for your everyday problems.
          </h3>
        </div>
        <div className="line"></div>
        <div className="content-heading">This is what we do in a nutshell</div>
        <div className="content">
          Creative ut tincidunt nibh, varius cursus nunc. Curabitur molestie,
          metus vel luctus euismod, mi libero laoreet odio, eu dapibus leo
          tortor sit amet purus. It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout.
        </div>
        <div className="awesome-support">
          <div className="review">
            Working with Pixova has been an experience for a lifetime. I
            strongly reccommend these guys for their awesome support. Erlich
            Bachman, Aviato
          </div>
        </div>
        <div className="about-section">{handleService}</div>
      </div>
    </section>
  );
}

export default About;
