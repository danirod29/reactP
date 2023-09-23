import React from "react";

const FooterFirst = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>¿Buscando recomendaciones?</p>
          <p>Inicia sesión para ver recomendaciones personalizadas</p>
          <a className="btn btn-accent btn-sm">Iniciar Sesión</a>
          <p>O <span>regístrate</span> y únete a Steam de forma gratuita</p>
        </aside>
      </footer>
    </div>
  );
};

export default FooterFirst;
