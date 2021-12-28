import React,{Component} from 'react';
import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'
import styles from './Catergory.module.css'; 
import { Link, NavLink } from 'react-router-dom';

const ALL_CATEGORIES = gql`
{
    categories {
      name
    }
  }
`

class Catergory extends Component {
    render() { 
        return (

        <div className={styles.menu}>
          <Query
          query={ALL_CATEGORIES}
          >
          {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Something went wrong...</p>
                    return (
                      
                        <>
                        {
                        data.categories.map(elm=><Link to={`/category/${elm.name}`} key={elm.name}> 
                        <span key={elm.name}>{elm.name} </span> 
                        </Link> )
                        }
                        </>
                      
                    )
                  }}
          </Query>
        </div>
        
        );
    }
}
 
export default Catergory;
