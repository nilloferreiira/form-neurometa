import Image from "next/image"

export function Logo() {
    return (
        <div className="size-12 rounded-md overflow-hidden">
        <Image
          src={"/neurometa.jpeg"}
          alt={"Neurometa"}
          width={200}
          height={200}
        />
      </div>
    )
}