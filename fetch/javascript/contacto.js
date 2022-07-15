const fetchLocalData = () => {
  fetch("/json/data.json").then((response)=>response.json())
  .then((result)=>{
    renderPageContacto(result.contacto)
  }).catch((err)=>{
    console.error(err)
  })
}

const renderPageContacto = (body) =>{
  console.log(body)
}

fetchLocalData()