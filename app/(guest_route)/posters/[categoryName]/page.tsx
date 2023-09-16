"use client";

import { ProductCard } from "@/components/protuct/ProductCard";

export interface IPostersProps {}

export default function Posters(props: IPostersProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
}
