"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Redux/Store";

export interface IDefaultHeaderProps {}

function Search() {
  return (
    <div className="form-control ">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered md:w-auto"
      />
    </div>
  );
}

function Wishlist({ quantity }: { quantity: number }) {
  return (
    <Link href={"/wishlist"}>
      <label className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${false ? "fill-red-600" : "fill-none"}`}
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
          {quantity > 0 && (
            <span className="badge badge-sm indicator-item">{quantity}</span>
          )}
        </div>
      </label>
    </Link>
  );
}

function Cart({ quantity }: { quantity: number }) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
          {quantity > 0 && (
            <span className="badge badge-sm indicator-item">{quantity}</span>
          )}
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-96 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{quantity} Sản Phẩm</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Xem Giỏ Hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAuth() {
  const { data, status } = useSession();
  console.log("🚀 ~ file: DefaultNavbar.tsx:11 ~ DefaultNavbar ~ data:", data);
  const isAuth = status == "authenticated";
  return (
    <>
      {isAuth && (
        <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    (data?.user?.image as string) ||
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                  alt="user avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p className="self-center text-lg">{data?.user?.name}</p>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        </>
      )}
      {!isAuth && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              {/* user svg */}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="9"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <div className="card-actions">
                <Link href={"/auth/signin"}>
                  <div className="btn btn-primary btn-block">Đăng nhập</div>
                </Link>
                <span>
                  Bạn chưa có tài khoản ?
                  <Link href={"/auth/register"} className="text-blue-500">
                    Đăng ký ngay
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function DefaultHeader(props: IDefaultHeaderProps) {
  const router = useRouter();
  const globalStore = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 z-50 navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>

      <div className="flex-none gap-2">
        <Search></Search>
        <Wishlist quantity={globalStore.user.items.wishlist.length}></Wishlist>
        <Cart quantity={globalStore.user.items.cart.length}></Cart>
        <UserAuth></UserAuth>
      </div>
    </div>
  );
}
