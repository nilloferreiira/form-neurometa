import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-white p-4">
      {/* <h1 className="pl-10 font-bold text-2xl text-black">Neurometa</h1> */}
      <div className="size-12 rounded-md overflow-hidden">
      <Image src={'/neurometa.jpeg'} alt={"Neurometa"} width={200} height={200} />
      </div>
    </header>
  );
}
