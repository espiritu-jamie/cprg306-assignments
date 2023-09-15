import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
        <h1> 
            Name: Jamie Espiritu
        </h1>
        <h1>
            Course Section: CPRG 306-C
        </h1>
        <h1>
            Link to my GitHub Assignments Repository: 
            <Link href="https://github.com/espiritu-jamie/cprg306-assignments"> Jamie Espiritu - Assignments
            </Link>
        </h1>
      
    </main>
      
    
  )
}