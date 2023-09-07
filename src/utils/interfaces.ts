export interface MenuProps {
  handleMenu: (menu: string) => void;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  category_id: number;
  brand: string;
  price: number;
  slug: string;
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
  category_id: number;
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
}