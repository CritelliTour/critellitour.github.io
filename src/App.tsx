import React from "react";

import { Container } from "mobrix-ui";

import Header from "contents/header";
import Footer from "contents/footer";
import HomePage from "pages/Home";

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
        <Header dark={dark} setDarkMode={setDarkMode} />
      </Container>
      <Container
        background={false}
        className="overflow-auto h-[70%] flex flex-col w-full"
      >
        <HomePage dark={dark} setDarkMode={setDarkMode} />
      </Container>
      <Container
        dark
        className="relative bottom-0 w-full h-[8%]"
        wrapper="footer"
        shadow={!dark}
      >
        <Footer dark={dark} setDarkMode={setDarkMode} />
      </Container>
    </Container>
  );
};

const App = () => <AppContainer />;

export default App;
