import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppContex";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faAngleDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./ChosenProduct.css";
import Spinner from "../share/Spinner/Spinner";

const ChosenProduct = () => {
  // id producto seleccionado y lista de productos
  const { selectedProduct, dataProducts } = useContext(AppContext);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [goToMenu, setGoToMenu] = useState(false);
  // si encuentra el producto lo almacenas aqui ->
  const [selectedProductData, setSelectedProductData] = useState(null);

  // cantidad de producto
  const [productQuantity, setProductQuantity] = useState(1)

  useEffect(() => {
    // Buscar el producto correspondiente usando el ID del producto seleccionado

    if (selectedProduct) {
      // filtrando por id del producto seleccionado
      const product = dataProducts.filter(item => item.productId === selectedProduct)[0]
      setSelectedProductData(product);
    }
  }, [selectedProduct, dataProducts]);

  const handleConfirmar = () => {
    setConfirmOrder(true);
  };

  const handleBackToMenu = () => {
    setGoToMenu(true);
  };

  const handleOnQuantityChange = (value) => {
    if(productQuantity + value <= 0) return
    setProductQuantity(productQuantity + (value))
  }

  if (confirmOrder) {
    return <Navigate to={"../confirmar"} />;
  }

  if (goToMenu) {
    return <Navigate to={"/inicio"} />;
  }

  if (!selectedProductData) {
    return <Spinner msg="Buscando producto..."/>; // -> puedes cambiar el mensaje si lo deseas
  }

  return (
    <main className="mainWrapper">
      <section className="infoRestaurant">
        <img
          className="imageRestaurant"
          src={selectedProductData.store.storeImageUrl}
          alt={selectedProductData.store.name}
        />
        <section className="infoStore">
          <div className="child1">
            <img
              className="storeLogo"
              src={selectedProductData.store.storeImageUrl}
              alt={selectedProductData.store.name}
            />
          </div>
          <div className="child2">
            <p className="storeName">{selectedProductData.store.name}</p>
            <p className="storeAddres">{selectedProductData.store.address}</p>
          </div>
          <div className="child3 storeIcon pointer">
            <FontAwesomeIcon icon={faShop} />
          </div>
        </section>
      </section>


      <div className="wrapperInfoFood">
        <div className="listTitle">
          <FontAwesomeIcon
            className="pointer"
            icon={faAngleDown}
          />
          <h4>Lista del pedido</h4>
          <FontAwesomeIcon
            className="pointer"
            icon={faAngleDown}
          />
        </div>
        <div className="cardInfoFood">
          <section className="infoFood">
            <article className="imageFood child4">
              <img
                src={selectedProductData.productImageUrl}
                alt="imagen comida"
              />
            </article>
            <article className="nameFood child5">
              <h2 className="productNameFood">{selectedProductData.name}</h2>
              <h2 className="categoryFood">
                {" "}
                {selectedProductData.category.name}
              </h2>
            </article>
            <article className="nameFood child6 trashIcon ">
              <FontAwesomeIcon
                className="pointer"
                icon={faTrashCan}
              />
            </article>
          </section>
          <div className="rowBtns">
            <input
              className="btnIngredients btnsReset"
              type="button"
              value="Ingredientes"
            />
            <input
              className="btnClarifications btnsReset"
              type="button"
              value="Aclaraciones"
            />
          </div>
          <div className="rowBtns">
            <div className="counter">
              <input
                className="btnLess btnsReset"
                type="button"
                value="-"
                onClick={() => handleOnQuantityChange(-1)}
              />

              <input
                className="count btnsReset"
                type="button"
                value={productQuantity}
              />
              <input
                className="btnMore btnsReset"
                type="button"
                value="+"
                onClick={() => handleOnQuantityChange(1)}
              />
            </div>
            <div className="price">${selectedProductData.price !== 0 ? selectedProductData.price * productQuantity : '0000'}</div>
          </div>
        </div>
      </div>



      <div className="columnBtns">
        <input
          className="btnMenu btnsReset"
          type="button"
          value="Agregar más al pedido"
          onClick={handleBackToMenu}
        />
        <input
          className="btnConfirm btnsReset"
          type="button"
          value="Confirmar"
          onClick={handleConfirmar}
        />
      </div>
    </main>
  );
};

export default ChosenProduct;
