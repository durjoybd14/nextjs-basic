import React from "react";

const Allorder = ({ props }) => {
  const data =props.data
  return (
    <div>
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </div>
  );
};



export default Allorder;
