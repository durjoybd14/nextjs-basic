import React from "react";
import Details from "./Details";

const users = [
  {
    id: 1,
    name: "naim",
    age: 25,
    uv: "just",
    desc:"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quisquam."
  },
  {
    id: 2,
    name: "shoshe",
    age: 23,
    uv: "bsmrau",
    desc:"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quisquam."

  },
  {
    id: 3,
    name: "durjoy",
    age: 25,
    uv: "just",
    desc:"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quisquam."

  }
];


const AboutContent = () => {
  return (
    <div>
      {users.map((user) => (
        <Details user={user} key={user.id} />
      ))}
    </div>
  );
};

export default AboutContent;

export function getEventById( id) {
  return users.find((event) => event.id === id);
}