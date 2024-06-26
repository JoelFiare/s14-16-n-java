import React from 'react'
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import HamburgerBtn from '../share/Buttons/HamburgerBtn/HamburgerBtn';
import FoodQuery from '../FoodQuery/FoodQuery';
import Backward from '../share/Buttons/Backward/Backward';



function Navbar() {
  const location = useLocation();

  let paginaActual;

  switch (location.pathname) {
    case '/inicio':
      paginaActual = 'Av. Rivadavia 2360';
      break;
    case '/perfil':
      paginaActual = 'Perfil';
      break;
    case '/beneficios':
      paginaActual = 'Descuentos';
      break;
    case '/pedidos':
      paginaActual = 'Mi Pedido';
      break;
    case '/busqueda/mealId':
      paginaActual = 'Av. Rivadavia 2360';
      break;
    case '/busqueda/pagar/producto-elegido':
      paginaActual = 'Tu pedido';
      break;
    case '/busqueda/pagar/confirmar':
      paginaActual = 'Confirmar Pedido';
      break;
    case '/busqueda/pagar/medio-de-pago':
      paginaActual = 'Método de Pago';
      break;
    case '/busqueda/pagar/monto-de-efectivo':
      paginaActual = 'Método de Pago';
      break;
    case '/busqueda/pagar/detalle-de-pedido':
      paginaActual = 'Detalles del Pedido';
      break;
    default:
      paginaActual = 'Av. Rivadavia 2360';
  }

  const hideBackArrow = location.pathname === '/inicio';
  const hideLocationIcon = location.pathname.startsWith('/busqueda/pagar')
  const isMinHeader = location.pathname.startsWith('/busqueda/pagar') && !location.pathname.includes('/busqueda/pagar/producto-elegido');;
  const isMediumHeader = location.pathname === '/busqueda/pagar/producto-elegido';
  const showHeader = hideBackArrow || isMediumHeader || [
    'busqueda',
    'busqueda/pagar/confirmar',
    'busqueda/pagar/medio-de-pago',
    'busqueda/pagar/monto-de-efectivo',
    'busqueda/pagar/detalle-de-pedido',
  ].some(path => `/${path}` === location.pathname)

  return (
    <>
      {showHeader && <header className={`header ${isMinHeader ? 'headerMin' : ''} ${isMediumHeader ? 'headerMedium' : ''}`}>
        <div className='headerH'>
          {!hideBackArrow && <Backward />}
          <address>
            {!hideLocationIcon && <FontAwesomeIcon icon={faLocationDot} style={{ color: '#D57FFF', fontSize: '21px' }} />}
            <p style={{ fontSize: '16px', lineHeight: '21px', fontWeight: '500' }}>{paginaActual}</p>
          </address>
          <div className='headerLinks'>
            <div className='hamburger-btn-container'>
              <LinkRouter to=''><FontAwesomeIcon icon={faBell} style={{ color: '#D57FFF', fontSize: '21px', width: '32px' }} /></LinkRouter>
            </div>
            <HamburgerBtn />
          </div>
        </div>
        <FoodQuery />
      </header>}
    </>
  )
}

export default Navbar
