import { useState } from "react";
import { useRouter } from "next/navigation";

import { MenuProps } from "@/utils/interfaces";
import { Category } from "@/utils/interfaces";
import { Close } from "@/utils/icons";

const MenuMobile = ({ categories, handleMenu }: MenuProps) => {
  const [showCategories, setShowCategories] = useState(false);
  const router = useRouter();

  const handleClick = (route?: string) => {
    handleMenu("mobile");
    route && router.push(route);
  };

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-stone-900/80 z-10">
      <div className="bg-white w-4/5 h-screen px-4 py-6">
          <div className="md:hidden flex-1 mb-6" onClick={() => handleClick()}><Close /></div>
          <div className="pt-4" onClick={() => handleClick("/")}>
            <h1 className="text-lg">HOME</h1>
            <div className="h-[1px] bg-stone-300 mt-4"></div>
          </div>
          <div
            className="pt-4"
            onClick={() => handleShowCategories()}
          >
            <div className="flex justify-between">
            <h1 className="text-lg">PRODUCTOS</h1>
            <h1 className="text-xl">{showCategories ? "-" : "+"}</h1>
            </div>
            {
              showCategories && (
                <div
                  className="pl-12 py-2"
                  data-te-collapse-item
                  data-te-collapse-show
                  aria-labelledby="headingOne"
                  data-te-parent="#accordionExample"
                >
                  <div className="py-4 uppercase cursor-pointer" onClick={() => handleClick("/products")}><h2 className="text-gray-400">Ver todos</h2></div>
                  {
                    categories.map((category: Category) => (
                      <div className="py-4 uppercase cursor-pointer" key={category.id} onClick={() => handleClick(`/categories/${category.slug}`)}><h2 className="text-gray-400">{category.title}</h2></div>
                    ))
                  }
                </div>
              )
            }
            <div className="h-[1px] bg-stone-300 mt-4"></div>
          </div>
          <div className="pt-4" onClick={() => handleClick("/contact")}>
            <h1 className="text-lg">CONTACTO</h1>
            <div className="h-[1px] bg-stone-300 mt-4"></div>
          </div>
      </div>
    </div>
  );
};

export default MenuMobile;
