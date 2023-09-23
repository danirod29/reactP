import React from "react";

const SideBar = () => {
  return (
    <div>
      <div id="sideBar" className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
            <li>
              <div className="menu-vertical">
                <img src="https://store.cloudflare.steamstatic.com/public/images//gift/steamcards_promo_03.png?v=1" />
                <h1>Tarjetas regalo de Steam</h1>
                <h3>Regala diversión</h3>
              </div>
            </li>
            <li>
              <h1>RECOMENDADOS</h1>
              <ul>
                <li>
                  <a>Amigos</a>
                </li>
                <li>
                  <a>Mentores</a>
                </li>
                <li>
                  <a>Etiquetas</a>
                </li>
              </ul>
            </li>
            <li>
              <h1>EXPLORAR CATEGORIAS</h1>
              <ul>
                <li>
                  <a>Lo mas vendido</a>
                </li>
                <li>
                  <a>Novedades</a>
                </li>
                <li>
                  <a>Proximamente</a>
                </li>
                <li>
                  <a>Ofertas</a>
                </li>
              </ul>
            </li>
            <li>
              <h1>EXPLORAR POR GENERO</h1>
              <ul>
                <li>
                  <a>Free to play</a>
                </li>
                <li>
                  <a>Acceso Anticipado</a>
                </li>
                <li>
                  <a>Accion</a>
                </li>
                <li>
                  <a>Aventura</a>
                </li>
                <li>
                  <a>Carreras</a>
                </li>
                <li>
                  <a>Casuales</a>
                </li>
                <li>
                  <a>Deportes</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
