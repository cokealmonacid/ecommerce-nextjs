import Divider from "./Divider";
import { Instagram } from "@/utils/icons";

const Footer = () => {
  return (
    <div className="border-t-2 border-t-black w-full h-[200px] md:h-[250px] flex">
      <div className="container mx-auto flex flex-col justify-center items-center align-middle">
        <a href="https://www.instagram.com/delakalleskateshop/"><Instagram /></a>
        <Divider />
        <h3 className="mb-4">@delakalleskateshop</h3>
        <h4>2023</h4>
      </div>
    </div>
  );
};

export default Footer;
