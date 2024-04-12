import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faPercent, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const pages = [
  {
    name: 'Inicio',
    path: '/inicio',
    icon: faHouse
  },
 
  {
    name: "Descuentos",
    path: "/beneficios",
    icon: faPercent,
  },
  {
    name: 'Mi Pedido',
    path: '/pedidos',
    icon: faCartShopping
  }, 
  {
    name: "Cuenta",
    path: "/perfil",
    icon: faUser,
  },
  // {
  //   name: 'Pagos',
  //   path: '/pagos',
  //   icon: faDollarSign
  // }
];

function Footer() {
  return (
    <>
      <footer className="footer">
        <nav style={{ width: "98%", marginLeft: "1%", marginRight: "1%" }}>
          <ul
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              columnGap: "20px",
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <li
                key={page.path}
                style={{ listStyleType: "none" }}
              >
                <LinkRouter to={page.path}>
                  <FontAwesomeIcon
                    icon={page.icon}
                    style={{ fontSize: "20px" }}
                  />
                  <p style={{ fontSize: "14px" }}>{page.name}</p>
                </LinkRouter>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
