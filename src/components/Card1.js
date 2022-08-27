import React from 'react'
import "./card.css"

function Card1(props) {

  let { cname, verified,name, bio ,imageUrl, nworth ,  rvalue, tvalue} = props;
  return (
    <div>
      <div className="card">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span className={`badge rounded-pill float-left bg-${props.verified=== 'Gov' ? 'danger' : 'success'} `}>{verified}</span>
      </div>
      <div className="card-body">
        <img className='card-image' src={imageUrl} alt="" />
     
        <h2 className="name mt-6">{cname}</h2>
        <h4 className="job-title">{name}</h4>
        <div className="bio">{bio}</div>

      </div>

      <div className="card-footer">
        <div className="stats">
          <div className="stat">
            <span className="label">Net Worth</span>
            <span className="value">{nworth}</span>
          </div>
          <div className="stat">
            <span className="label">Successful Invesments</span>
            <span className="value">{rvalue}</span>
          </div>
          <div className="stat">
            <span className="label">Since</span>
            <span className="value">{tvalue}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card1
