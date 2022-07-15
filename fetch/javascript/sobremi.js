const fetchLocalData = () => {
  fetch("/json/data.json").then((response)=>response.json())
  .then((result)=>{
    renderPage(result.sobreMi)
  }).catch((err)=>{
    console.error(err)
  })
}

const renderPage = (body) =>{
  console.log(body)
}

fetchLocalData()