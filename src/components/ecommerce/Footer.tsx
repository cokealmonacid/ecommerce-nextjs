import Divider from "./Divider";
import { Instagram, Youtube } from "@/utils/icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="border-t-2 border-t-black w-full h-[200px] md:h-[250px] flex">
      <div className="container mx-auto flex flex-col justify-center items-center align-middle">
        <div className="flex gap-4">
          <a href="https://www.instagram.com/delakalleskateshop/"><Instagram /></a>
          <a href="https://youtube.com/@delakalleskateshop8866?si=tbcwQ9Wlbtztx4Fr"><Youtube /></a>
        </div>
        <Divider />
        <h3 className="mb-4">@delakalleskateshop</h3>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default Footer;
