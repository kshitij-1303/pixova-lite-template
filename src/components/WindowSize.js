import { useState, useEffect } from "react";

function WindowWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", (handleScreenWidth) => {
      return () => window.removeEventListener("resize", handleScreenWidth);
    });
  });
  return window.innerWidth;
}

export default WindowWidth;
