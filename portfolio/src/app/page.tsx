import Image from "next/image";
import Lebron from "/public/lebron.png";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1>madi tabon portfolio</h1>
        <Image src={Lebron} height={500} width={500} alt="header image" />
      </div>
    </div>
  );
}
