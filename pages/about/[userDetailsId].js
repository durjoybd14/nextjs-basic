import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../components/AboutContent.js/AboutContent";

const Details = () => {
  const router = useRouter();
  const id = parseInt(router.query.userDetailsId);

  const value = getEventById(id);

  return (
    <div
      style={{ border: "2px solid gray", padding: "20px", marginTop: "5px" }}
    >
      <div>{value?.name}</div>
      <div>{value?.age}</div>
      <div>{value?.uv}</div>
      <div>{value?.desc}</div>
    </div>
  );
};

export default Details;
