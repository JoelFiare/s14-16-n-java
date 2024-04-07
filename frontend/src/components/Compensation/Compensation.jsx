import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import Form from "../share/Form/Form";
import "./Compensation.css";
import CompensationInput from "./CompensationInput/CompensationInput";

const compensationList = {
  fail: [
    {
      name: "type",
      description: "Tipo de comida",
    },
    {
      name: "time",
      description: "Tiempo de espera",
    },
    {
      name: "quality",
      description: "Calidad de la comida",
    },
  ],
  compensation: [
    {
      name: "present",
      description: "Mi comida en condiciones más otro producto de regalo",
    },
    {
      name: "refund",
      description: "Devolución del dinero",
    },
    {
      name: "coupon",
      description: "Descuento futuro en la misma tienda",
    },
  ],
};

export default function Compensation() {
  return (
    <>
      <Form className="compensation">
        <div>
          <section>
            <h4>¿En qué falló la entrega?</h4>
            <ul>
              {compensationList.fail.map((item, key) => {
                return <CompensationInput key={key} item={item} />;
              })}
            </ul>
          </section>

          <section>
            <h4>¿Qué compensación elijes?</h4>
            <ul>
              {compensationList.compensation.map((item, key) => {
                return <CompensationInput key={key} item={item} />;
              })}
            </ul>
          </section>
        </div>

        <MainBtn>Aceptar</MainBtn>
      </Form>
    </>
  );
}