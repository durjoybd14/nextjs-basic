import Link from "next/link";
import React from "react";


const Details = (props) => {
 

  const { name, uv, id, age } = props.user;
  return (
    <div
      style={{ border: "2px solid gray", padding: "10px", marginTop: "5px" }}
    >
      <h1>
        {id}. Study at {uv}
      </h1>
      <h3>Name is {name}</h3>
      <h4>Age {age}</h4>
      <Link href={`/about/${id}`}>
        <a>show Details</a>
      </Link>
    </div>
  );
};

export default Details;
