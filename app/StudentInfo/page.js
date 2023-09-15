import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>
        <b>Name:</b> Jamie Espiritu
      </h1>
      <h1>
        <b>Course Section:</b> CPRG-306-C
      </h1>
      <h1>
        <b>GitHub Assignment Repository:</b>
        <Link href="https://github.com/espiritu-jamie/cprg306-assignments">Jamie Espiritu - GitHub Assignment Repository</Link>
      </h1>
    </main>
  )
}