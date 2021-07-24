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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: {
      data: data,
    }, // will be passed to the page component as props
  };
}

export default Allorder;
