import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar({darkMode, setDarkMode}) {
  return (
    <nav className="pt-10 flex justify-between items-center">
      <h1 className="text-xl  font-burtons dark:text-white">jauhar muhammed</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
        </li>
        <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
