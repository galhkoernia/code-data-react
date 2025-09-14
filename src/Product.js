import React from "react";

function Product({ name, price, discount = 0 }) {
  return (
    <div>
      {/*Nama Product*/}
      <h2>{name}</h2>
      {/*Harga Asli*/}
      <p>
        <s>Rp {price}</s> ({discount}%)
      </p>
      {/*Harga Setelah Diskon */}
      <p>
        <b>
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}{" "}
        </b>
      </p>
      <hr />
    </div>
  );
}

export default Product;
