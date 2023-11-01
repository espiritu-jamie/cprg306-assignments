"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import Link from "next/link";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(name) {
    const itemNameWithoutEmojis = name.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '');
    const itemName = itemNameWithoutEmojis.split(",")[0].trim();
    setSelectedItemName(itemName);
  }

  async function handleSignOut() {
    await firebaseSignOut();
}

  return (
    <main>
        {user && (
          <div>
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
            <div>
                <button 
                  onClick={handleSignOut}
                  className="m-6 hover:text-orange-500">
                    Sign out
                </button>
              </div>
          </div>
        )}
        <Link 
          href="/"
          className="m-6  hover:text-orange-500">Back to Home</Link>

    </main>
  )
}