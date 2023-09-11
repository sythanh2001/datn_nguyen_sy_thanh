"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) {
      console.log("🚀 ~ file: page.tsx:18 ~ handleSubmit ~ error:", res?.error);
      return;
    }

    router.push("/profile");
  };

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    // Nếu đã đăng nhập thì điều hướng đến trang chủ
    // ...
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xs">
        <h2 className="text-2xl font-semibold mb-6">Đăng nhập</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Mật khẩu"
            />
          </div>
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700"
          >
            Đăng nhập
          </button>
        </form>

        <button className="btn" onClick={()=>signIn("google")}>
          Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
