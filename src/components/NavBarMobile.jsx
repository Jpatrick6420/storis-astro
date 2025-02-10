function NavBarMobile() {
  return (
    <nav class="flex justify-between items-center pt-2">
      <div class="w-[50px] h-[30px] hover:scale-110 active:scale-100 bg-clip-text">
        <p class=" ">Storis</p>
      </div>
      <ul class="text-stone-50 flex ">
        <li class="px-2 hover:text-purple-600  hover:scale-110 active:scale-100">
          <a href="/">Home</a>
        </li>
        <li class="px-2 hover:text-purple-600  hover:scale-110 active:scale-100">
          <a href="/how-to">How To</a>
        </li>
        <li class="px-2 hover:text-purple-600  hover:scale-110 active:scale-100">
          <a href="/glossary">Glossary</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarMobile;
