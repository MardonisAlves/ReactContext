import React from "react";
import Context from "./context/Context";
export default function User() {
  const value = React.useContext(Context);

  return (
    <div>
      {value.map(item => {
        return <ul>
          <li key={item.name}>{item.name}</li>
        </ul>
      })}


    </div>
  );
}