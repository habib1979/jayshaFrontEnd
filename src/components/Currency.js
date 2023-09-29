import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({
      type: "CHG_CURRENCY",
      payload: newCurrency
    });
  };

  return (
    <div className="alert alert-secondary">
      <span> Currency: </span>
      <select
        className="custom-select"
        id="inputGroupSelect03"
        value={currency}
        onChange={handleCurrencyChange}
        style={{
          backgroundColor: "#90ee90",
          color: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "5px 10px",
          fontSize: "16px",
          width: "200px",
          cursor: "pointer"
        }}
      >
        <option value="$"> $ Dollar </option>
        <option value="£"> £ Pound </option>
        <option value="€"> € Euro </option>
        <option value="₹"> ₹ Rupee </option>
      </select>
    </div>
  );
};

export default Currency;
