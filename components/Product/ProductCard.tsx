"use client";
import Link from "next/link";
import * as React from "react";
import { PropsWithChildren } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../Redux/GlobalSlice";
import { RootState } from "../Redux/Store";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";
const data = {
  id: "3795477",
  itemCollectionId: "4632971",
  collection: {
    id: "365622",
    name: "Love Dad",
    url: "/cn9999/love-dad",
  },
  title: "to My Dad Gift from Son ",
  imageUrl:
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  artStyle: "illustration",
  orientation: "horizontal",
  exclusive: false,
  multiplate: false,
  price: {
    amount: 44,
    currency: null,
    formatted: null,
  },
  author: {
    id: "1120113",
    fullName: "Loves Poster",
    nick: "cn9999",
  },
};
export interface IProductCardProps {
  id: string;
  itemCollectionId: string;
  collection: {
    id: string;
    name: string;
    url: string;
  };
  title: string;
  imageUrl: string;
  artStyle: string;
  orientation: string;
  exclusive: boolean;
  multiplate: boolean;
  price: {
    amount: number;
    currency: string;
    formatted: string;
  };
  author: {
    id: string;
    fullName: string;
    nick: string;
  };
}

function AddToCart({ id }: { id: string }) {
  const globalStore = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  const isInCart = globalStore.user.items.cart.find((x) => x == id);

  return (
    <div
      className="btn btn-circle btn-outline"
      onClick={() => {
        if (isInCart) {
          dispatch(removeFromCart(id));
          return;
        }
        dispatch(addToCart(id));
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isInCart ? "fill-blue-400" : "fill-none"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </div>
  );
}
function AddToWishlist({ id }: { id: string }) {
  const globalStore = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  const isInWishlist = globalStore.user.items.wishlist.find((x) => x == id);

  return (
    <button
      className="btn btn-circle btn-outline"
      onClick={() => {
        if (isInWishlist) {
          dispatch(removeFromWishlist(id));
          return;
        }
        dispatch(addToWishlist(id));
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isInWishlist ? "fill-blue-400" : "fill-none"}`}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
export function ProductCard({
  id,
  imageUrl,
  title,
  tag: tags,
}: {
  id: string;
  imageUrl: string;
  title?: string;
  tag?: string[];
}) {
  const isWishlist = false;
  const router = useRouter();
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure
        className="cursor-pointer"
        onClick={() => router.push(`/product/${id}`)}
      >
        <img src={imageUrl} alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <AddToWishlist id={id}></AddToWishlist>
          <AddToCart id={id}></AddToCart>
        </div>
        {tags && (
          <div className="card-actions justify-end">
            {tags.map((tag) => (
              <div key={v4()} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
