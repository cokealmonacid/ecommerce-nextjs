import { DashboardButtonProps } from "@/utils/interfaces";
import LoadingDots from "../ecommerce/LoadingDots";

const Button = ({ isDisabled, isLoading, title }: DashboardButtonProps) => (
  <button className="bg-green-500 w-full rounded py-2 text-white font-semibold disabled:opacity-60 disabled:pb-3" disabled={isDisabled}>
    { isLoading ? <LoadingDots color='#FFFFFF' /> : title}
  </button>
);

export default Button;
