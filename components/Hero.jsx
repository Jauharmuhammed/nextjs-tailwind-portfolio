import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

export default function Hero() {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Jauhar Muhammed
      </h2>
      <h3 className="text-xl py-1 dark:text-white md:text-3xl md:py-2">
        Developer and designer.
      </h3>
      <p className="text-md py-5 leading-6 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto md:text-xl md:leading-7">
        Freelancer providing services for programming and design content needs.
        Join me down below and let's get cracking!
      </p>
      <div className="text-4xl md:text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 relative overflow-hidden mt-10 md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
