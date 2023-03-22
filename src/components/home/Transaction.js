import { useEffect, useState } from "react"
import "./Trans.css"


  
const Transaction=(props)=>{
    console.log(props)
    const[search,setsearch]=useState("")
    const[filterTrans,setFilterT]=useState(props.transaction)

    const filterData =(search)=>{
        if(!search || !search.trim().length){
            return setFilterT(props.transaction)
        }
        let text = [...props.transaction]
        text = text.filter((e)=>e.description.toLowerCase().includes(search.toLowerCase().trim()))
        setFilterT(text)

    }
    useEffect(()=>filterData(search),[props.transaction])
  
    return(
        <div className="trans">
            <h5>Transaction</h5>
            <input className="inp"
                type='search' 
                placeholder="search"
                value={search}
                onChange={(e)=>{
                    setsearch(e.target.value)
                    filterData(e.target.value)
                }}/>

            <div>{filterTrans.map((ele)=>{return(
                    <div className="cell"><span>Rs.{ele.amount}</span> 
                    <span>{ele.description}</span>
                    <span> {ele.radioType}</span></div>
            )})}
           </div> 
           
        </div>
    )
}
export default Transaction;