"use client";
import React from "react";
import { MapPin, Search, ShoppingBasketIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart";
import CartProduct from "../CartProduct";
import { Button } from "../ui/button";
import Cart from "./Cart";
type Props = {};

const Header = (props: Props) => {
  const { cart } = useCartStore();
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  console.log(totalPrice.toFixed(2));

  return (
    <header className="w-full h-[60px] bg-bgNavPrimary text-white px-10 py-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-2xl">
            Amazon.<small>in</small>
          </span>
          <div className="hidden items-center gap-1 lg:flex">
            <MapPin width={15} height={15} />
            <div className="flex flex-col ">
              <span className="text-[10px]">
                Delivering to Chhindwāra 480001
              </span>
              <span className="text-[10px]">Update address</span>
            </div>
          </div>
        </div>
        <div className="w-fit flex flex-auto">
          <input
            type="text"
            placeholder="Seach on amazon.in"
            className="w-full py-1 px-4 bg-white placeholder:text-gray-500 border-none outline-none rounded-l-md"
          />
          <Search
            width={35}
            height={32}
            className="bg-[#F3A847] py-1 px-4 w-fit rounded-r-md"
          />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div className="hidden flex-col md:flex">
            <span className="text-xs">Hello signIn</span>
            <span className="text-xs font-bold">Account List</span>
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-xs">Returns</span>
            <span className="text-xs font-bold">& Orders</span>
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
