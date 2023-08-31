import React, { useEffect } from 'react'
import { useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

export const Deposit = () => {
    const [depositTx, setDepositTx] = useState([])  
    const QueryURL = "https://api.studio.thegraph.com/query/51753/deposit-contract-subgraph/v1.0.0";
    const client = new ApolloClient({
      uri: QueryURL,
      cache: new InMemoryCache(),
    })
    const query =`{
        deposits(last: 100) {
          id
          account
          amount
          blockNumber
        }
    }`
    useEffect(()=>{
      
      client
      .query({
        query: gql(query),
      })
      .then((data) => {setDepositTx(data.data.deposits)})
      .catch((err) => {
        console.log('Error fetching data: ', err)
      })
    },[])

    
    const columns = [
      { field: 'account', headerName: 'Account'  , width : 420},
      { field: 'amount', headerName: 'Amount' , width : 120},
      { field: 'blockNumber', headerName: 'Block No' , width : 120},
    ]
    return (
      <div>
        <Typography>Deposit Transactions</Typography>
        <DataGrid
          rows={depositTx}
          columns={columns}
        />
       </div>
  )
}
