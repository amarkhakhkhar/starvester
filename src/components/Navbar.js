import React from 'react';
import '../pages/loginsignup.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const details = [
  { "id": "0", "cname": "mixmars", "verified":"Gov", "category":"technical",  "name": "abc", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "100cr rs", "rvalue": "Mid-High", "tvalue": "15%-31%" },
  { "id": "1", "cname": "mixduw", "verified":"Gov" ,"category":"commercial", "name": "xyz", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "110cr  rs", "rvalue": "Mid", "tvalue": "10%-19%" },
  { "id": "2", "cname": "mixpqr", "verified":"NonGov" ,"category":"service",  "name": "yta", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "10cr  rs", "rvalue": "Low", "tvalue": "3%-6%" },
  { "id": "3", "cname": "mixwra", "verified":"Gov", "category":"commercial","name": "nfs", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "200cr rs", "rvalue": "Mid-High", "tvalue": "15%-31%" },
  { "id": "4", "cname": "mixvaa", "verified":"NonGov" ,"category":"product", "name": "vaw", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "70cr  rs", "rvalue": "Mid", "tvalue": "10%-19%" },
  { "id": "5", "cname": "mixgea", "verified":"Gov" ,"category":"technical", "name": "raw", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "10cr  rs", "rvalue": "Low", "tvalue": "3%-6%" }
]
export default function Navbar() {

  const [data,setData] = useState(details);
  
  const filterResult = (catItem)=> {
    const result = details.filter((curData)=>{
      return curData.category === catItem;
      
    }) ;
    setData(result);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">⭐Star-Vester</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="../home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../investors">Investor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../startup">Startups</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" onClick={()=>filterResult('technical')} href="#">Technical</a></li>
                  <li><a className="dropdown-item" onClick={()=>filterResult('commercial')} href="#">Commercial</a></li>
                  <li><a className="dropdown-item" onClick={()=>filterResult('product')} href="#">Product-based</a></li>
                  <li><a className="dropdown-item" onClick={()=>filterResult('service')}href="#">Service-based</a></li>
                  {/* <li><a className="dropdown-item" h f="#"></a></li> */}
                </ul>
              </li>
            </ul>
            

          </div>
        </div>
      </nav>
    </div>
  )
}
