import Image from "next/image";

import { ImageInputValues, ImageRevealProps } from "@/utils/interfaces";

const ImageReveal = ({ url, handleReset }: ImageRevealProps<ImageInputValues>) => {
  if (typeof url !== "string") {
    url = URL.createObjectURL(url[0]);
  }

  return(
    <div className="relative border-2 mb-4 m-1 flex justify-center">
      <Image src={url} alt="Imagen subida" width={300} height={300} className="object-contain" style={{ width: 300, height: 300 }} />
      <button className="rounded-full bg-red-500 text-white font-bold px-3 py-1 absolute top-1 right-1" onClick={handleReset} type="reset">X</button>
    </div>
  );
};

export default ImageReveal;
