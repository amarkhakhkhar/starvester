import React from 'react'
import Navbar from '../components/Navbar.js'
import Card from '../components/Card.js'
import './Home.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import Card1 from '../components/Card1.js'
// cname, name, bio ,imageUrl, nworth ,  rvalue, tvalue
const details = [
  { "id": "0", "cname": "mixmars", "verified":"Gov", "category":"technical",  "name": "abc", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "100cr rs", "rvalue": "Mid-High", "tvalue": "15%-31%" },
  { "id": "1", "cname": "mixduw", "verified":"Gov" ,"category":"commercial", "name": "xyz", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "110cr  rs", "rvalue": "Mid", "tvalue": "10%-19%" },
  { "id": "2", "cname": "mixpqr", "verified":"NonGov" ,"category":"service",  "name": "yta", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "10cr  rs", "rvalue": "Low", "tvalue": "3%-6%" },
  { "id": "3", "cname": "mixwra", "verified":"Gov", "category":"commercial","name": "nfs", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "200cr rs", "rvalue": "Mid-High", "tvalue": "15%-31%" },
  { "id": "4", "cname": "mixvaa", "verified":"NonGov" ,"category":"product", "name": "vaw", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "70cr  rs", "rvalue": "Mid", "tvalue": "10%-19%" },
  { "id": "5", "cname": "mixgea", "verified":"Gov" ,"category":"technical", "name": "raw", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "10cr  rs", "rvalue": "Low", "tvalue": "3%-6%" }
]
export default function Home() {
  
  const [firstName, setFirstName] = useState('');

  return (
    <div className='home'>
      <Navbar />
      <div className="gridContainer mx-3">
    
        <form className="w-full">
            <input type="text" placeholder='Search...' onChange={e => {setFirstName(e.target.value.toLowerCase());}}/>
              {/* <input type="button" value="Button"/> */}
              {/* <input id="search-bar" className="form-control me-2" onInput={console.log("val")} type="search" placeholder="Search" aria-label="Search through site content" /> */}
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
        <div className='parent' id='parent'>
          {details.map((element) => {

            return (
              <div className={"row cardresults " + element.cname} id="gridLayout" key={element.id}>
                <Card cname={element.cname}
                  name={element.name}
                  bio={element.bio}
                  nworth={element.nworth}
                  rvalue={element.rvalue}
                  imageUrl={element.imageUrl}
                  tvalue={element.tvalue} />
              </div>
            );
          })}
        </div>
  
      </div>
    </div>
  )
}
