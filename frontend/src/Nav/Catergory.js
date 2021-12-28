import React,{useReducer, useEffect} from 'react';
import styles from './Catergory.module.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios'
const intial = {
  data:[],
  error:''
}

const reducer = (state, action)=>{

  switch(action.type){
    case "sucess":
      return {
        data: action.data,
        error:''
      }
    case "error":
      return {
        data: '',
        error: action.data
      }
    default: 
    return state
  }
}



const Catergory = () => {

  const [cate, dispatch] = useReducer(reducer, intial)

  useEffect(()=>{
    axios.get('http://localhost:8002/home/')
    .then(res => {
      dispatch({type:'sucess', data: res.data})
    })
    .catch(error => {
      dispatch({type:'error', data: error})
      console.log(error)
    })

  },[])

  return ( 
    <div className={styles.menu}>
      <div>
        {cate.error && <h2>Something went wrong</h2>}
        {cate.data && cate.data.map((elm,ind) => <Link to={`/category/${elm.name}`} key={ind}>{elm.name}</Link>)}
        
      </div>

     
    </div> );
}
 
export default Catergory;
