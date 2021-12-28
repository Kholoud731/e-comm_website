import React,{Component} from 'react';
import styles from './Collection.module.css';
import { useParams } from "react-router-dom";
import NavBar from './NavBar';
import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'


const LIST = gql`
query productsByCategory($category: CategoryInput) {
  category(input:  $category ) {
    name
    products {
      id
      name
      inStock
      gallery
    }
  }
}`

const Collection = () => {
  
  let { name } = useParams();
  console.log(name)
  return (<>
  <NavBar/>
  <Query
          query={LIST}
          // variables={{category: "tech"}}
          >
          {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Something went wrong...</p>
                    console.log(data.category.name)
                    return (
                      
                        <>
<h1>hii</h1>
         
                        {
                        data.category.products.map((elm,ind)=><div key={ind}><span>{elm.name}</span> </div>)
                        }
                        </>
                      
                    )
                  }}
          </Query>
  </>);
};
export default Collection;




