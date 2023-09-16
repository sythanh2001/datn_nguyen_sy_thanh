"use client";
import * as React from "react";
import { PropsWithChildren } from "react";
const data = {
  id: 3795477,
  itemCollectionId: 4632971,
  collection: {
    id: 365622,
    name: "Love Dad",
    url: "/cn9999/love-dad",
  },
  title: "to My Dad Gift from Son ",
  imageUrl:
    "https://static.displate.com/392x280/displate/2021-05-05/54aa9ce94c39f8efb8147dd2de83032a_bd42456a2ca7e72f627a0304b98bec5a.jpg",
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
    id: 1120113,
    fullName: "Loves Poster",
    nick: "cn9999",
  },
};
export function ProductCard({ children }: PropsWithChildren) {
  const isWishlist = false;
  return (
    <div className="card bg-base-100 shadow-xl image-full scale-100 hover:scale-110 ease-in duration-100">
      <figure className="">
        <img src={data.imageUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isWishlist ? "fill-red-600" : "fill-none"}`}
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
        </div>
      </div>
    </div>
  );
}
