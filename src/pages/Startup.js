import React from 'react'
import Card from '../components/Card';
import Navbar from '../components/Navbar';

function Startup() {

    const details = [
        { "id": "0", "cname": "startupsmars", "name": "abc", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "100cr rs", "rvalue": "Mid-High", "tvalue": "15%-31%" },
        { "id": "1", "cname": "startupsduw", "name": "xyz", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "110cr  rs", "rvalue": "Mid", "tvalue": "10%-19%" },
        { "id": "2", "cname": "startupspqr", "name": "yta", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "10cr  rs", "rvalue": "Low", "tvalue": "3%-6%" },
        { "id": "3", "cname": "startupswra", "name": "nfs", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "200cr rs", "rvalue": "Mid-High", "tvalue": "15%-31%" },
        { "id": "4", "cname": "startupsvaa", "name": "vaw", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "70cr  rs", "rvalue": "Mid", "tvalue": "10%-19%" },
        { "id": "5", "cname": "startupsgea", "name": "raw", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "10cr  rs", "rvalue": "Low", "tvalue": "3%-6%" }
      ]
    

  return (
    <div className='startups'>
    <Navbar/>
    <div className="gridContainer mx-3">
  
      <div className='parent'>
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

export default Startup
