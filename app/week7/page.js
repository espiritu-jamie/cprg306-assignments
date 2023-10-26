"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import Link from "next/link";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(name) {
    const itemNameWithoutEmojis = name.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '');
    const itemName = itemNameWithoutEmojis.split(",")[0].trim();
    setSelectedItemName(itemName);
  }

  return (
    <main>
        <h1 className="text-xl/8 font-bold ml-4">Shopping List</h1>
        <div className="flex">
          <div className="flex-1">
            <NewItem onAddItem={handleAddItem} />
            <ItemList 
              items={items}
              onItemSelect={handleItemSelect}/>
          </div>
          <div className="flex-1">
            <MealIdeas 
              ingredient={selectedItemName} />
          </div>
        </div>
        <Link href="/">Back to Home</Link>

    </main>
  )
}