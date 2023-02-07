import React from 'react'

function Alert(props) {
    const Capatalise=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    props.alert1 &&<div className={`alert alert-${props.alert1.type}warning alert-dismissible fade show`} role="alert">
      <strong>{Capatalise(props.alert1.type)}</strong>:{props.alert1.msg}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
  )
}

export default Alert
