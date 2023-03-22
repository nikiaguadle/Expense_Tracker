import "./OverViewC.css"
import React,{ useState} from "react"


const AddTransaction=(props)=>{
   
    const[amount,setAmont] = useState('')
    const[description,setDescription] = useState('')
    const[radioType,setRadioType] = useState('expenss')

    const handleTrans =()=>{ console.log(radioType)
       props.addTrans( {amount:Number(amount),
        description,
        radioType,
        id:Date.now()
       })
       
        props.setAddTxnVisable();
        
    }

    return(
        <div className="addTrans">
           <input className="in"
                type='number' 
                placeholder="Amount"
                value={amount}
                onChange={(e)=>{setAmont(e.target.value)}}/>
           <input className="in" 
                type='text' 
                placeholder="Description"
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}/>
           <div className="radio">
                <input type="radio"
                    id="expenss" name="type"
                    value="expenss"
                    checked={radioType==='expenss'}
                    onChange={(e)=>{setRadioType(e.target.value)}}
                    />
            <label htmlFor="expenss">Expenss</label>
                <input type="radio"
                    id="income" 
                    name="type" 
                    value="income" 
                    checked={radioType==='income'}
                    onChange={(e)=>{setRadioType(e.target.value)}}
                    />
            <label htmlFor="income">Income</label>
           </div>
           <div className="btn">
            <button onClick={handleTrans}>Add Transaction</button></div>
        </div>
    )

}

const OverViewComp=(props)=>{
    console.log(props)
    const[isAddTxnVisable,setAddTxnVisable]=useState(false)
   
    return(
        <div className="over">                                         
            <div className="bal">
                balance : {(props.inc-props.exp)<0 ? 0 : (props.inc-props.exp)}
                <button className="btn"  onClick={()=>{setAddTxnVisable(!isAddTxnVisable)}}> 
                  { isAddTxnVisable  ? "cancel"  :  "ADD"}
                    </button>  
             </div>

             <div className="addTrans">
             { isAddTxnVisable &&(
                    <AddTransaction
                    setAddTxnVisable={setAddTxnVisable}
                    addTrans={props.addTrans}/>
                    )
             }
             </div>
             <div className="ExIN">
                <div className="xi"> Expenss<span>Rs.{props.exp}</span></div>
                <div className="xi">Income <span>Rs.{props.inc}</span></div>
             </div>
        
        </div>
    )
}
export default OverViewComp;