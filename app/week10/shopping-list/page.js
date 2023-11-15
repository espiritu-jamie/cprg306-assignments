"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import Link from "next/link";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";


export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


  function handleItemSelect(name) {
    const itemNameWithoutEmojis = name.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '');
    const itemName = itemNameWithoutEmojis.split(",")[0].trim();
    setSelectedItemName(itemName);
  }

  async function handleSignOut() {
    await firebaseSignOut();
  }

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user?.uid]);

  async function handleAddItem(item) {
    const newItem = await addItem(user.uid, item);
    setItems(prevItems => [...prevItems, { ...item, id: newItem.id }]);
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