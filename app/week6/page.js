"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import Link from "next/link";
import itemsData from "./items.json";


export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(item) {
    setItems([...items, item]);
    
  }

  return (
    <main>
        <h1 className="text-xl/8 font-bold ml-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items}/>
        <Link href="/">Back to Home</Link>

    </main>
  )
}