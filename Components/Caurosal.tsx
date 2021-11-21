import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Caurosal = () => {
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
        className="h-screen object-contain"
      >
        <div data-src="/photo1.jpeg" />
        <div data-src="/photo-2.jpeg" />
        <div data-src="/photo-3.jpeg" />
      </AutoplaySlider>
    </div>
  );
};

export default Caurosal;
