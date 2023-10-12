import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col p-4">
      <Link className="w-fit" href={"/1"}>First step - creating <span className="font-semibold">Arrays</span> and using <span className="font-semibold">.map</span></Link>
      <Link className="w-fit" href={"/2"}>Second step - why should we use Typescript? What did we learn about <span className="font-semibold">Props</span></Link>
      <Link className="w-fit" href={"/3"}>Third step - adding new things to an array (without actually atualizing the screen)</Link>
      <Link className="w-fit" href={"/4"}>Fourth step - rendering screen: how and why to <span className="font-semibold">useState</span></Link>
      <Link className="w-fit" href={"/5"}>Fifth step - changing text with input</Link>
    </section>
  )
}
