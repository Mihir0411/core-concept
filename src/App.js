import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const jsFramwork = ['react','vue', 'angular','alm']
  const products = [
    {name:'photo shop', title:'hello' ,dollar:'$120'},
    {name:'illastrator', title:'hello' ,dollar:'$100'},
    {name:'pdf', title:'hello' ,dollar:'$140'}
  ]
  return (
    <div className="App">
      <header className="App-header">
      
        <p>Hello React </p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            jsFramwork.map(frame => <li>{frame}</li>)
          }
          {
            products.map(product => <li>{product.dollar}</li>)
          }
          <p>heloo</p>
          <li>{jsFramwork[0]}</li>
          <li>{jsFramwork[1]}</li>
          <li>{jsFramwork[2]}</li>
        </ul>
        <Product name={products[0].name} title={products[0].title} dollar={products[0].dollar}></Product>
        <Person name = "alamgir" age="36" Email="ahmihir11@gmail.com"></Person>
        <Person name = "hossain" age="36" Email="ahmihir11@gmail.com"></Person>
        <Person name = "mihir" age="36" Email="ahmihir11@gmail.com"></Person>
       
      
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0); 
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data))
  })
  return(
    <div>
      <h1>{users.length}</h1>
      {
        <ul>
          {
            users.map(users => <li>{users.name}<br></br>{users.email}</li>)
          }
        </ul>
      }
    </div>
  )
}
function Product(props) {
  const productStyle={
    border:'3px solid blue',
    margin:'10px',
    padding: '5px',
    backgroundColor:'gray'
  }
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <p>{props.title}</p>
      <p>{props.dollar} <button>Buy Now</button></p>
      
    </div>
  )
}
function Person(props) {
  const stylePerson ={
    border:'2px solid red',
    margin: '10px'
  }
  return <div style={stylePerson}>
  <h4>{props.name}</h4>
  <p>age:{props.age}</p>
  <p>Email:{props.Email}</p>
  
  </div>
}

export default App;
