import { LightModeIcon, DarkModeIcon, Logo } from "assets/images";

import { Toggle } from "mobrix-ui";

const Header: PageElement = ({ dark, setDarkMode }) => {
  return (
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
  );
};

export default Header;
