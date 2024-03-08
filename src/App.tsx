import React from "react";

import {
  DarkModeIcon,
  LightModeIcon,
  Logo,
  carouselIcons,
} from "assets/images";
import quickLinks from "constants/quick-links";
import { Carousel, Container, Link, Toggle } from "mobrix-ui";

const AppContainer = () => {
  const [dark, setDarkMode] = React.useState(false);

  return (
    <Container
      animated
      additionalProps={{
        "data-mbx-animation": "fade-in",
      }}
      className="absolute h-full w-full top-0 bottom-0 overflow-hidden"
      dark={dark}
    >
      <Container
        dark
        className="relative top-0 w-full h-[22%]"
        wrapper="header"
        shadow={!dark}
      >
        <div className="w-full flex flex-col">
          <div className="flex flex-row-reverse">
            <Toggle
              onIcon={LightModeIcon}
              offIcon={DarkModeIcon}
              shadow={false}
              dark={dark}
              value={!dark}
              onChange={() => {
                setDarkMode(!dark);
              }}
            />
          </div>
          <div className="flex flex-col items-center pb-1">
            <Logo />
          </div>
        </div>
      </Container>
      <Container
        background={false}
        className="overflow-auto h-[70%] flex flex-col w-full"
      >
        <Carousel
          dark={dark}
          background={false}
          className="m-auto"
          elements={carouselIcons}
        />
      </Container>
      <Container
        dark
        className="relative bottom-0 w-full h-[8%]"
        wrapper="footer"
        shadow={!dark}
      >
        <div className="w-full flex flex-col items-center py-1 h-full">
          <div className="flex flex-row m-auto">
            {quickLinks.map((quickLink, index) => (
              <Link key={String(index)} className="px-2" to={quickLink.url}>
                {quickLink.img}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
};

const App = () => <AppContainer />;

export default App;
