export const getProduct = async (filtro) => {
    try{const res = await fetch(`http://localhost:7000/productos?category=${filtro}`)
        if(!res.ok){
            throw new Error(`Response status: ${response.status}`)
        }
    const data = await res.json()

    return data
    }catch(error){
        throw new Error("Error obteniendo productos")
    }
  }