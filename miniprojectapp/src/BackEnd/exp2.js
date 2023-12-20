
import {useReducer,useState} from "react";

export default function EmpInsert()
{
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fld]:action.val}
                case 'clear':
                return init;
                 default:{}
                }
            }
            const init={
                
                ename:"",
                eage:0,
                esex:"",
                emailid:"",
                ephn:0,

                
            }
            const[med,dispatch] = useReducer(reducer,init);
           
            const [msg,setmsg]=useState("");
            const submitData=(e)=>{
                e.preventDefault()
                const reqoptions={
                    method:"post",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify({
                        
                         NAME:med.ename,
                         AGE:med.eage,
                         SEX:med.esex,
                         EMAILID:med.emailid,
                       
                         PHONENO:med.ephn



                    })
                }
                fetch("http://localhost:9000/insertdata",reqoptions)
                .then(res=>res.text())
                .then(str=>setmsg(str))
            }
    
    return(
        <div>
            <h1>Emp_Form : </h1>
            <form >
                Enter EmpId :
                <input type="number" className='row m-3' name="empid" value={med.EMPNO} onChange={(e)=>{dispatch({type:'update', fld:'empid',val:e.target.value})}}></input>
                Enter EmpName :
                <input type="text" className='row m-3' name="ename" value={med.ENAME} onChange={(e)=>{dispatch({type:'update', fld:'ename',val:e.target.value})}}></input>
          
                <input type="submit" value='Submit' onClick={(e)=>{submitData(e)}}/>
        
                <input type="reset" value="Reset" />

                <p>{JSON.stringify(med)}</p>
            </form>
        </div>
    )
}