import Image from "next/image";

export function Logo() {
  return (
    <div className="size-12 rounded-md overflow-hidden">
      <Image
        src="/assets/neurometa.jpeg" // path relative to the public folder
        alt="Neurometa"
        width={200}
        height={200}
      />
    </div>
  );
}
