import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function Home() {
    return(
        <main>  
            <h1><b>My Shopping List</b></h1>
            <StudentInfo />
            <Link href="/">Back to Home</Link>
        </main>
    )
}