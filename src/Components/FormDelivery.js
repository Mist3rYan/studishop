import React, { useState } from "react";

const FormDelivery = (props) => {
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [number, setNumber] = useState(0);
  const [address, setAddress] = useState("");

  const handleZipChange = (e) => {
    if (!isNaN(e.target.value)) {
      if (e.target.value.length === 5) {
        const url = `https:/apicarto.ign.fr/api/codes-postaux/communes/${e.target.value}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      return setZipCode(e.target.value);
    }
  };

  /*const [primaryAddress, setPrimaryAddress] = useState({
        city: '',
        zipCode: 0,
        number: 0,
        address: '',
    });*/

  return (
    <div>
      <h1>Quel est votre adresse de livraison SVP ?</h1>
      <label for="zipcode">Code Postal : </label>
      <input
        type="number"
        name="zipcode"
        value={zipCode}
        onChange={handleZipChange}
      />
    </div>
  );
};

export default FormDelivery;
