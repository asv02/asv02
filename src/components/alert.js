import React from 'react'
import "./alert.css"//Not able to import
function alert(props) {
  
  return (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{`${props.alert} Successful .`}</strong>
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
   </div>
  )
}

export default alert 