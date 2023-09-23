import React, { useState } from "react";

const Navbar = () => {
  const [counter, setCounter] = useState(0)

  const increment = () =>{
    if(counter == 0){
    setCounter(counter+1)
    }else{
      setCounter(0)
    }
  }

  const names=['dan','rod']
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a id ="navImgB" className="btn btn-ghost normal-case text-xl"><img className="navButton" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png"/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
              <summary>Tienda</summary>
              <ul className="p-2">
                  <li>
                    <a>Inicio</a>
                    
                  </li>
                  <li>
                    <a>Lista de descubrimientos</a>
                  </li>
                </ul>
                </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Comunidad</summary>
                <ul className="p-2">
                  <li>
                    <a>Inicio</a>
                  </li>
                  <li>
                    <a>Discuciones</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Acerca de</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
            <li>
            <a className="btn btn-accent btn-xs" onClick={increment}>Instalar steam</a>
            {/*counter == 0 ? (<p>Si</p>):(<p>No</p>)*/}
            </li>
            <li>
            <a >Iniciar sesión | </a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Idiomas</summary>
                <ul className="p-2">
                  <li>
                    <a>Español</a>
                  </li>
                  <li>
                    <a>English</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
