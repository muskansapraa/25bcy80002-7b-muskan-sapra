"use client";

import { useState } from "react";
import { useProductStore, type Product } from "./store/useProductStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProductItem({ product }: { product: Product }) {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);

  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(String(product.price));
  const [quantity, setQuantity] = useState(String(product.quantity));

  return (
    <div className="flex flex-col gap-3 rounded-lg border px-5 py-4 shadow-sm">

      {/* Name */}
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />

      {/* Category */}
      <Input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />

      {/* Price + Quantity */}
      <div className="flex gap-2">
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Qty"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => {
            const parsedPrice = parseFloat(price);
            const parsedQty = parseInt(quantity, 10);

            if (!isNaN(parsedPrice) && !isNaN(parsedQty)) {
              updateProduct(product.id, {
                name,
                category,
                price: parsedPrice,
                quantity: parsedQty,
              });
            }
          }}
        >
          Save
        </Button>

        <Button
          variant="destructive"
          size="sm"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}