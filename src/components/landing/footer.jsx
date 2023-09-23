import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav>
          <div className="grid grid-flow-col gap-96">
            <a>
            <img
                width="100"
                height="100"
                src="https://cdn.worldvectorlogo.com/logos/valve-4.svg"
              />
            </a>
            <a>
              <img
                width="100"
                height="100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Steam_logo.svg/2560px-Steam_logo.svg.png"
              />
            </a>
          </div>
        </nav>
        <p>
          © 2023 Valve Corporation. Todos los derechos reservados. Todas las
          marcas registradas pertenecen a sus respectivos dueños en EE. UU. y
          otros países. Todos los precios incluyen IVA (donde sea aplicable).
          Política de Privacidad | Información legal | Acuerdo de Suscriptor a
          Steam | Reembolsos | Cookies
        </p>

        <aside>
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">Acerca de Valve | </a>
            <a className="link link-hover">Empleo | </a>
            <a className="link link-hover">SteamWorks | </a>
            <a className="link link-hover">Distribución de Steam | </a>
            <a className="link link-hover">Soporte | </a>
            <a className="link link-hover">Tarjetas de Regalo | </a>
            <a className="link link-hover">Steam | </a>
            <a className="link link-hover">@Steam | </a>
          </nav>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
