"use client";

import { useProductStore } from "./store/useProductStore";
import ProductItem from "./ProductItem";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  const addProduct = useProductStore((state) => state.addProduct);
  const hydrated = useProductStore((state) => state.hydrated);

  if (!hydrated) return <Spinner className="size-6" />;

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">
          Products{" "}
          <span className="text-base font-normal text-zinc-500">
            ({products.length})
          </span>
        </h1>

        <Button size="sm" onClick={addProduct}>
          Add
        </Button>
      </div>

      {products.length === 0 ? (
        <p className="rounded-lg border border-dashed px-6 py-10 text-center text-zinc-400">
          No products left.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {products.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}