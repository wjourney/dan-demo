import React from 'react'

export const getPetCategory = ()=>{
  return fetch('http://47.111.247.0/axieclass.php', {
    method: 'GET',
  })
  .then(response => {
    return response.json()
  })
  .then((body:any) => (body))
  .catch((body:any) => (body))
}


interface GetTransactionDataResponse{
  success: boolean
  axiedb: any
}

export const getTransactionData= () => {
  return fetch('http://47.111.247.0/axietrade.php', {
    method: 'GET',
  })
  .then(response => {
    return response.json()
  })
  .then((body:any) => (body))
  .catch((body:any) => (body))
}