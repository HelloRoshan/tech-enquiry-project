import React from 'react';
import { FaStar } from "react-icons/fa";

function Star({ filled, onClick }) {
    return (
    <FaStar
        className="fs-2"
        color={filled ? "orange" : "lightgray"}
        onClick={onClick} />
  );
}

export default Star;