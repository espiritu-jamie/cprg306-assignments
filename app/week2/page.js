import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function Home() {
    return(
        <main>  
            <h1 className="text-center text-xl/8 font-bold">My Shopping List</h1>
            <StudentInfo />
            <Link href="/">Back to Home</Link>
        </main>
    )
}