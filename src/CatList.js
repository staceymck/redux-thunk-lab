import React from 'react'

function CatList({catPics}) {
  console.log(catPics)
  return (
    <div>
      {catPics.map(cat => <img key={cat.id} src={cat.url} />)}
    </div> 
  )
}

export default CatList