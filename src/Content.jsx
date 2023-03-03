import { ProductIndex } from "./ProductIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  // const products = [
  //   { id: 1, name: "SpaceShip", price: "450000.95", description: "likes to talk to you but floats well", quantity: 4 },
  //   {
  //     id: 2,
  //     name: "Hippy Van",
  //     price: "120.99",
  //     description: "made out of legos",
  //     quantity: 5,
  //   },
  // ];
  // console.log(products);

  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <p>Hello</p>
      <ProductIndex products={products} />
    </div>
  );
}
