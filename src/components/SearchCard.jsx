import { jls } from "../data/jlsData";

export default function SearchCard({ topic }) {
  return (
    <li
      key={topic.title}
      className="text-stone-50 border-stone-200 px-4 
      py-2 bg-[#23262d] w-full sm:mx-0 sm:w-60 hover:bg-gradient-to-br
       hover:from-purple-700 hover:to-purple-300  sm:hover:scale-110 transition-all 
       duration-500 ease-in ml-2 rounded-md"
    >
      <h4 className="text-center text-yellow-300 text-lg ">{topic.title}</h4>
      <p className="text-center sm:text-left">{topic.instructions}</p>
    </li>
  );
}
