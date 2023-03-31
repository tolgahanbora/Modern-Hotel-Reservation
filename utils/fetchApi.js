import axios from "axios";



export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '318aa3ba28msh204ebe5afac923bp137dadjsn538ee845ebf4',
            
          }
    })

    return data
  }