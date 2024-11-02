import React from "react";
import Logo from "../assets/images/logo.png"

export default function Header() {
  return (
    <header className="menu flex justify-around items-center w-screen h-28 shadow-[0_1px_10px_rgba(102,102,102,0.15)] lg:h-40 bg-[#9bfec5]"> 
      <div className="menu__content flex justify-around w-[50vw] lg:justify-start lg:gap-8 lg:ml-8 lg:w-[30vw]">
        <div className="menu__logo">
          <img src={Logo} alt="Logo" className="lg:w-40 cursor-pointer" />
        </div>
        
      </div>

      <div className="menu__container flex items-center relative lg:hidden">
        <input type="checkbox" id="menu-toggle" className="menu__container--input hidden" />
        <label htmlFor="menu-toggle" className="menu__container--label cursor-pointer p-4">
          <span className="menu__container--span w-6 h-6 bg-center bg-no-repeat" style={{ backgroundImage: `url('/image/menuDropdown.svg')` }}></span>
        </label>
        
        <ul className="menu__container__list absolute top-16 w-[60vw] bg-white hidden">
          <li className="menu__container__list--item p-4">
            <a href="#" className="menu__container__list--link text-[#003d00] bg-clip-text text-transparent uppercase">Link 1</a> 
          </li>
          <li className="menu__container__list--item p-4">
            <a href="#" className="menu__container__list--link text-[#003d00] bg-clip-text text-transparent uppercase">Link 2</a> 
          </li>
        </ul>
      </div>

      <nav className="menu__container__desktop hidden lg:block">
        <ul className="menu__container__desktop__list flex justify-around w-[70vw]">
          <li>
            <a href="#" className="menu__container__desktop__list--link text-[#003d00] text-lg font-medium uppercase tracking-wider">Link 1</a> 
          </li>
          <li>
            <a href="#" className="menu__container__desktop__list--link text-[#003d00] text-lg font-medium uppercase tracking-wider">Link 2</a> 
          </li>
        </ul>
      </nav>
    </header>
  );
}
