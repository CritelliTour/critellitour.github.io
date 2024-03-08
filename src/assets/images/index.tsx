import carouselPhoto0 from "./photos/carousel_0.jpg";
import carouselPhoto1 from "./photos/carousel_1.jpg";
import carouselPhoto2 from "./photos/carousel_2.jpg";
import carouselPhoto3 from "./photos/carousel_3.jpg";
import carouselPhoto4 from "./photos/carousel_4.jpg";

import logo from "./logo_critellitour.png";
import FacebookLogo from "./quick_links/facebook-logo.svg";
import LinkedinLogo from "./quick_links/linkedin-logo.svg";
import InstagramLogo from "./quick_links/instagram-logo.svg";
import MailLogo from "./quick_links/mail-logo.svg";
import TelegramLogo from "./quick_links/telegram-logo.svg";
import WhatsappLogo from "./quick_links/whatsapp-logo.svg";

import DarkMode from "./icons/commons/dark-mode.svg";
import LightMode from "./icons/commons/light-mode.svg";

import IT_FLAG from "./icons/langs/it.svg";
import FR_FLAG from "./icons/langs/fr.svg";
import EN_FLAG from "./icons/langs/en.svg";
import DE_FLAG from "./icons/langs/de.svg";
import ES_FLAG from "./icons/langs/es.svg";

import { Image } from "mobrix-ui";

export const QUICK_LINKS_ICONS = {
  instagram: <Image alt="" width={35} height={35} src={InstagramLogo} />,
  facebook: <Image alt="" width={35} height={35} src={FacebookLogo} />,
  mail: <Image alt="" width={35} height={35} src={MailLogo} />,
  linkedIn: <Image alt="" width={35} height={35} src={LinkedinLogo} />,
  whatsapp: <Image alt="" width={35} height={35} src={WhatsappLogo} />,
  telegram: <Image alt="" width={35} height={35} src={TelegramLogo} />,
};

export const Logo: ImageContent = ({ width = 150, height }) => (
  <Image width={width} height={height} src={logo} />
);

export const DarkModeIcon = <img alt="" src={DarkMode} width={30} />;

export const LightModeIcon = <img alt="" src={LightMode} width={30} />;

export const LANGUAGES_ICONS: Record<string, JSX.Element> = {
  it: <Image alt="" width={15} height={15} src={IT_FLAG} />,
  de: <Image alt="" width={15} height={15} src={DE_FLAG} />,
  fr: <Image alt="" width={15} height={15} src={FR_FLAG} />,
  es: <Image alt="" width={15} height={15} src={ES_FLAG} />,
  en: <Image alt="" width={15} height={15} src={EN_FLAG} />,
};

export const carouselIcons = [
  carouselPhoto0,
  carouselPhoto1,
  carouselPhoto2,
  carouselPhoto3,
  carouselPhoto4,
].map((carouselIcon, index) => (
  <Image key={String(index)} src={carouselIcon} />
));
