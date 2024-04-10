import { useRouter } from "next/navigation";

import { MenuProps } from "@/utils/interfaces";
import { Category } from "@/utils/interfaces";

const Menu = ({ categories, handleMenu }: MenuProps) => {
  const router = useRouter();

  const handleClick = (menu: string, route: string) => {
    handleMenu(menu);
    router.push(route);
  };

  return (
    <div className="w-full bg-gray-950 py-6 absolute z-10">
      <div className="container mx-auto flex items-center gap-6 px-4">
        <div onClick={() => handleClick("desktop", "/products")}><h2 className="text-white uppercase cursor-pointer">Ver todos</h2></div>
        {
          categories.map((category: Category) => (
              <div onClick={() => handleClick("desktop", `/categories/${category.slug}`)} key={category.id}>
                <h2 className="text-white uppercase cursor-pointer">{category.title}</h2>
              </div>
            )
          )
        }
      </div>
    </div>
  );
};

export default Menu;
