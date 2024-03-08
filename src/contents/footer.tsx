import quickLinks from "constants/quick-links";

import { Link } from "mobrix-ui";

const Footer: PageElement = () => {
  return (
    <div className="w-full flex flex-col items-center py-1 h-full">
      <div className="flex flex-row m-auto">
        {quickLinks.map((quickLink, index) => (
          <Link key={String(index)} className="px-2" to={quickLink.url}>
            {quickLink.img}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
