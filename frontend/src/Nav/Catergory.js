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

  const changeColor = (e)=>{
    // get all the list to make sure we reset the color 
    const listRest = document.querySelectorAll('ul li')
    
    for (let i = 0; i < listRest.length; i++){
      listRest[i].style.color='#1D1F22'
      listRest[i].style.borderBottom='none'
    }
    // change the color for the trageted element 
    e.target.style.color='#5ECE7B'
    e.target.style.borderBottom='1px solid #5ECE7B'
  }

  return ( 
    <div className={styles.menu}>
   
        {cate.error && <h2>Something went wrong</h2>}
        {cate.data && <ul> {cate.data.map((elm,ind) => <Link to={`/category/${elm.name}`} key={ind}> <li onClick={(e)=>changeColor(e)} key={ind}>{elm.name}</li></Link>)}</ul>}

    </div> );
}
 
export default Catergory;
