import React from 'react'

function Home({arrObj}) {
  return (
    <>
    {arrObj.map((item, index)=>{
        return(
            <>
            <div class="card-body">
    <h5 class="card-title">{item.firstName}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div></>
        )
    })}
    </>
  )
}

export default Home