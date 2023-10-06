import Link from "next/link";
import NewItem from "./new-item";


export default function Page() {
    return (
        <main>
            <h1 className="text-center text-xl/8 font-bold">Shopping List</h1>
            <NewItem />
            <Link href="/">Back to Home</Link>
        </main>
    )
}


