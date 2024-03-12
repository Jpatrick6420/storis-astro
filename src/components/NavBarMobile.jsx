function NavBarMobile() {
  return (
    <nav class="flex justify-between items-center pt-2">
      <div class="w-[50px] h-[30px] bg-gradient-to-br from-purple-600 to-purple-400 hover:scale-110 active:scale-100"></div>
      <ul class="text-stone-50 flex ">
        <li class="px-2 hover:text-purple-600  hover:scale-110 active:scale-100">
          <a href="/">Home</a>
        </li>
        <li class="px-2 hover:text-purple-600  hover:scale-110 active:scale-100">
          How To
        </li>
        <li class="px-2 hover:text-purple-600  hover:scale-110 active:scale-100">
          <a href="/glossary">Glossary</a>
        </li>
        <li class="px-2 hover:text-purple-600  hover:scale-110 active:scale-100">
          Screens
        </li>
        <li class="px-2 hover:text-purple-600  hover:scale-110 active:scale-100">
          Departments
        </li>
      </ul>
    </nav>
  );
}

export default NavBarMobile;
