import React, { useState } from 'react'
import {ethers} from 'ethers'
import Mogaliversetoken from './artifacts/contracts/MogaliVerseToken.sol/MogaliVerseToken.json'

const mogaliAddress = "0xd157fbC9c42dFa607e2A19D593c055D11B3f8b05"

function App() {
   const [ balance,totalSupply,] = useState("")

   async function fetchMogali() {
    
    if(typeof window.ethereum != 'undefined'){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.contract(mogaliAddress,MogaliVerseToken.abi,provider)
   }
   try{
        const data= await contract.totalSupply()
        console.log('data',data)
    }catch(err){
        console.log('err',err)
   }
}

async function requestAccount(){
    await window.ethereum.request({ method: 'eth_requestAccounts'})
}

return(
    <div className="wrapper">
    <h1>How About Them Apples</h1>
    <form>
    <fieldset>
       <label>
         <p>{totalSupply}</p>
         <input name="name" />
       </label>
     </fieldset>
     <button type="submit">Submit</button>
    </form>
  </div>
);
}