import React from "react";

const SecondaryNavBar = () => {
  return (
    <div>
      <div className="secondaryNav">
        <div id="posNav" className="navbar bg-base-100">
          <div id="navbar-start" className="navbar-start">
            <ul className="menu-xs menu menu-horizontal px-1">
              <li tabIndex={0}>
                <details>
                  <summary>Tu tienda</summary>
                  <ul className="p-2">
                    <li>
                      <a>Inicio</a>
                    </li>
                    <li>
                      <a>Recomendaciones de la comunidad</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Nuevo y destacable</summary>
                  <ul className="p-2">
                    <li>
                      <a>Populares</a>
                    </li>
                    <li>
                      <a>Noticias y actualizaciones</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Categorias</summary>
                  <ul className="p-2">
                    <li>
                      <a>Miscelanea</a>
                    </li>
                    <li>
                      <a>Generos</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Tienda de puntos</a>
              </li>
              <li>
                <a>Noticias</a>
              </li>
              <li>
                <a>Laboratorios</a>
              </li>
            </ul>
          </div>
          <div id="navbar-end" className="navbar-end">
            <input
              type="text"
              placeholder="Buscar"
              className="input-xs input input-bordered w-full max-w-xs"
            />
            <a className="btn-xs btn btn-secondary">o\</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavBar;
