import ImageSlider from "./ImageSlider";
import "./Slider.css"
const Slider = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpeg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpeg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpeg", title: "forest" },
  ];
  const containerStyles = {
    width: "100%",
    height: "102%",
    margin: "0 auto",
    Zindex:"-10"
  };
  return (
    <div className="slider">
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;