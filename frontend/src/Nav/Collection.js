import React from 'react';
// import styles from './Collection.module.css';
import { useParams } from "react-router-dom";
import NavBar from './NavBar';



const Collection = () => {
  
  let { name } = useParams();
  
  return (<>
  <NavBar/>
<h1>Hii</h1>
{name}
  </>);
};
export default Collection;




