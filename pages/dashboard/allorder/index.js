import React from 'react';
import Allorder from '../../../components/Dashboard/Allorder/Allorder';

const index = (props) => {
    console.log(props)
    return (
        <div>
            <Allorder props={props} />
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { 
        data,
      }, // will be passed to the page component as props
    }
  }
  
export default index;