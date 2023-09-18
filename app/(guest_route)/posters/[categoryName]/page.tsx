"use client";

import { ProductCard } from "@/components/Product/ProductCard";
import { addToCart } from "@/components/Redux/GlobalSlice";
import { RootState } from "@/components/Redux/Store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";
export interface IPostersProps {}

export default function Posters(props: IPostersProps) {
  const [products, setProducts] = useState<any[]>();
  useEffect(() => {
    axios.get("http://localhost:3000/api/search").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {products &&
        products.map((item) => (
          <ProductCard
            key={v4()}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            tag={[item.artStyle]}
          ></ProductCard>
        ))}
    </div>
  );
}
