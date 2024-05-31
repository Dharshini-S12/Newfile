import React from "react";
const HouseRow = ({house}) => {
  return (
      <tr>
        <td>{house.address}</td>
        <td>{house.country}</td>
        {house.price &&
        <td className={`${house.price < 50000 ? "text-primary" : " "}`}>{house.price}</td>}
      </tr>
  );
};

export default HouseRow;
