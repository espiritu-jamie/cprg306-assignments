import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main>
      <h1><b>CPRG 306: Web Development 2 - Assignments</b></h1>
      <StudentInfo />
      <Link href="/week2">Week 2</Link>

    </main>
  )
}
