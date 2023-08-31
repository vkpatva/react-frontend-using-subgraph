import React, { useEffect } from 'react'
import { useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

export const Withdraw = () => {
    const [withdrawTx, setWithdrawTx] = useState([])  
    const QueryURL = "https://api.studio.thegraph.com/query/51753/deposit-contract-subgraph/v1.0.0";
    const client = new ApolloClient({
      uri: QueryURL,
      cache: new InMemoryCache(),
    })
    const query =`{
      withdrawals(first: 10) {
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
      .then((data) => {setWithdrawTx(data.data.withdrawals)})
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
        <Typography>Withdraw Transactions</Typography>

        <DataGrid
          rows={withdrawTx}
          columns={columns}
        />
       </div>
  )
}
