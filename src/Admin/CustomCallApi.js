import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useCustomCallApi = (api) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(api)
        .then((res)=> setData(res.data))
        .catch((error)=>console.log(error))
    })
  return data //here data is state value which holding data that you readed from api from welcome.js file
}

export default useCustomCallApi
