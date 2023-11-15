"use client";

import { useState } from "react";
import Item from "./item";


export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleSort = (event) => {setSortBy(event.target.value)};

  

  // const groupedItems = itemsData.reduce((category, item) => {
  //   return (
  //     <ul>
  //       <li className="capitalize font-semibold">{item.category}</li>
  //       <li className="text-sm">{item.name}</li>
  //     </ul>
  //   )
  // }, 0);


  return (
    <div className="ml-6">
      <label for="sort">Sort by:</label>
      <button 
        className="m-4 p-4 rounded-lg w-1px"
        value={"name"}
        onClick={handleSort}
        style={{
          backgroundColor: sortBy === "name" ? "#DAA520" : "#CC7722"}}>
          Name
      </button>
      <button
        className="m-4 p-4 rounded-lg w-1px"
        value={"category"}
        onClick={handleSort}
        style={{backgroundColor: sortBy === "category" ? "#DAA520" : "#CC7722"}}>
          Category
      </button>
      <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item.name)}
        />
        
      ))}
    </ul>
  
  </div>
  )


}