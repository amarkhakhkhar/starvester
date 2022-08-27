import React from 'react'
import Card1 from '../components/Card1';
import Navbar from '../components/Navbar';

function Investors() {

    const details = [
        { "id": "0", "cname": "investorsmars", "name": "abc", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "100cr rs", "rvalue": "10+", "tvalue": "2031" },
        { "id": "1", "cname": "investorsduw", "name": "xyz", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "110cr  rs", "rvalue": "7+", "tvalue": "2031" },
        { "id": "2", "cname": "investorspqr", "name": "yta", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "10cr  rs", "rvalue": "15+", "tvalue": "2031" },
        { "id": "3", "cname": "investorswra", "name": "nfs", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "200cr rs", "rvalue": "21+", "tvalue": "2031" },
        { "id": "4", "cname": "investorsvaa", "name": "vaw", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "70cr  rs", "rvalue": "4+", "tvalue": "2031" },
        { "id": "5", "cname": "investorsgea", "name": "raw", "bio": "lorem epsum Non perferendis rerum nostrum blanditiis dolor odit necessitatibus.", "imageUrl": "https://cdn.thinglink.me/api/image/479353026285404161/1024/10/scaletowidth/0/0/1/1/false/true?wait=true", "nworth": "10cr  rs", "rvalue": "6+", "tvalue":"2031" }
      ]
    

  return (
    <div className='startups'>
    <Navbar/>
    <div className="gridContainer mx-3">
  
      <div className='parent'>
        {details.map((element) => {

          return (
            <div className={"row cardresults "} id="gridLayout" key={element.id}>
                
              <Card1 cname={element.cname}
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

export default Investors
