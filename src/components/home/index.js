import React,{useEffect, useState} from "react"
import OverViewComp from "./OverViewComp"
import "./index.css"
import Transaction from "./Transaction"

const Home= (props)=>{
    const[transaction,setTransaction]=useState([])
    const [exp,setExp] = useState(0)
    const[inc,setInc] = useState(0)
    

    const addTrans= (value)=>{
        const addTransactionArray =[...transaction]
        addTransactionArray.push(value)
        setTransaction(addTransactionArray) 
    } 
    const balnce =()=>{
       
        let exp = 0;
        let inc = 0;
    
        transaction.map((ele)=>{
            return( ele.radioType === "expenss"
                ? ( exp = exp + ele.amount )
                : ( inc  = inc + ele.amount))
        })
        setExp(exp);
        setInc(inc);
       
       
    
        
    }

        useEffect( ()=>balnce(),[transaction])

        
    return(
        <div className="home">
            
            <OverViewComp addTrans={addTrans} exp={exp} inc ={inc}/>
            <Transaction 
            transaction={transaction}
            
            />
        </div>

    )
}
export default Home;