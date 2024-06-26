import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './backArrow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function BackArrow() {
    const location = useLocation();
    const previousPage = () => {
        switch (location.pathname) {
            case '/inicio':
                return '/';
            case '/busqueda':
                return '/inicio';
            case '/busqueda/pagar/producto-elegido':
                return '/busqueda';
            case '/busqueda/pagar/confirmar':
                return '/busqueda/pagar/producto-elegido';
            case '/busqueda/pagar/medio-de-pago':
                return '/busqueda/pagar/confirmar';
            case '/busqueda/pagar/monto-de-efectivo':
                return '/busqueda/pagar/medio-de-pago';
            case '/busqueda/pagar/detalle-de-pedido':
                return '/busqueda/pagar/monto-de-efectivo';
            default:
                return '/';
        }
    };

    return (
        <>
            <Link to={previousPage()}>
                <FontAwesomeIcon className="pointer goBack" icon={faChevronLeft} />
            </Link>
        </>
    )
}
export default BackArrow