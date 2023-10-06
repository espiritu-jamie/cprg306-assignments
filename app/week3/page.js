import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
  return (
    <main>
        <h1 className="text-xl/8 font-bold ml-4">Shopping List</h1>
        <ItemList />
        <Link href="/">Back to Home</Link>

    </main>
  )
}