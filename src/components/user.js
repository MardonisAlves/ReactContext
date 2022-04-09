import React from "react";
import Context from "./context/Context";

export default function User() {
  const value = React.useContext(Context);
  return (
    <div style={{ height: 400, width: '100%' }}>
      {value.map(item => {
        return <p>{item.name}</p>
      })}
    </div>
  );
}