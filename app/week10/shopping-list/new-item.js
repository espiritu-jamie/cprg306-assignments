"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        onAddItem(newItem);

        setName("");
        setQuantity("1");
        setCategory("Produce");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div class="flex  w-full">
            <form class="p-4 m-8 rounded-xl bg-slate-800 text-black max-w-sm w-full" 
            onSubmit={handleSubmit}>
                <input
                class="w-full mt-2 border-2 border-gray-300 p-2 rounded-lg font-sans"
                placeholder="Item Name"
                type="text"
                value={name}
                onChange={handleNameChange}
                required />

                <input
                class="w-full mt-2 border-2 border-gray-300 p-2 rounded-lg font-sans"
                type="number"
                min={1}
                max={99}
                value={quantity}
                onChange={handleQuantityChange} 
                required/>

                <select
                class="w-full mt-2 border-2 border-gray-300 p-2 rounded-lg font-sans"
                value={category}
                onChange={handleCategoryChange}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen">Frozen Foods</option>
                    <option value="Canned">Canned Goods</option>
                    <option value="Dry">Dry Goods</option>
                    <option value="Beverage">Beverages</option>
                    <option value="Snack">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>

                <button 
                class="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                type="submit">
                    Add Item
                </button>


            </form>
        </div>
    )
};

