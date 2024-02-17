import { QueryKey } from "@tanstack/react-query";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

/* eslint-disable no-unused-vars */
export interface MenuProps {
  categories: Category[];
  handleMenu: (menu: string) => void;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  category_id: string;
  brand: string;
  price: number;
  slug: string;
  active: boolean;
}

export interface ButtonProps {
  title: string;
  url: string;
}

export interface ProductsWrapperProps {
  title: string;
  products: Product[];
  showed_products?: number; 
  show_button?: boolean;
  button?: ButtonProps;
}

export interface CartWrapperProps {
  products: CartItem[];
}

export interface CartItem {
  id: number;
  title: string;
  img: string;
  category_id: string;
  brand: string;
  price: number;
  quantity: number;
}

export interface Cart {
  products: CartItem[];
  totalItems: number;
  totalPrice: number;
};

export interface Actions {
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  deleteFromCart: (item: CartItem) => void;
}

export interface CounterCartProps {
  product: CartItem;
}

export interface SliderImages {
  id: string;
  image: string;
}

export interface SliderProps {
  imagesSlider: SliderImages[];
}

export interface NavbarProps {
  categories: Category[];
}

export interface AddToCartButtonProps {
  product: Product;
}

export interface HeaderProps {
  title?: string;
}

export interface ProductWithCategory extends Product {
  category: Category;
}

export interface CategoryWithProducts extends Category {
  _count: {
    products: number
  };
}

export interface RoutesProps {
  title: string;
  url: string;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ErrorAlertProps {
  message: string;
}

export interface WrapperProps {
  children: React.ReactNode;
  title: string;
  url: string;
}

export interface DashboardButtonProps {
  title: string;
  isDisabled: boolean;
  isLoading: boolean;
}

export interface CategoryFormInputs {
  title: string;
}

export interface ImageInputValues {
  "Image": string;
}

export interface ProductFormInputs extends ImageInputValues {
  title?: string;
  brand?: string;
  category_id?: string;
  slug?: string;
  price?: number;
  description?: string;
};

export interface ImageInputProps<T extends FieldValues> {
  img?: string;
  label: Path<T>;
  required: boolean;
  register: UseFormRegister<T>;
};

export interface ProductFormProps extends NavbarProps {
  product?: Product;
};

export interface CategoryFormProps {
  category?: Category
};

export interface ImageRevealProps<T extends FieldValues> {
  url: string;
  handleReset: () => void;
};

export interface ActionsProps {
  url?: string;
  edit?: boolean;
  remove?: boolean;
  view?: boolean;
  queryKey?: QueryKey;
  id?: string;
  slug?: string;
}