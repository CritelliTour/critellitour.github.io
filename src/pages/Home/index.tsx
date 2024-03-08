import { Carousel } from "mobrix-ui";

import { carouselIcons } from "assets/images";

const HomePage: PageElement = ({ dark, setDarkMode }) => {
  return (
    <div className="flex flex-col w-full">
      <Carousel
        dark={dark}
        background={false}
        className="m-auto"
        elements={carouselIcons}
      />
    </div>
  );
};

export default HomePage;
