import{useState,useRef}from"react";
import axios from"axios";


function EvenOdd()
{
      const rNum=useRef();
      const[num,setNum]=useState("");
      const[msg,setMsg]=useState("");
      const hNum=(event)=>{setNum(event.target.value);}

      const check=(event)=>{
              event.preventDefault();


              if(num==="")
              { 
                      alert("u did not enter integer");
                      setMsg("");
                      rNum.current.focus();
                      return;
              }

              let url="http://localhost:9000/check";
              let data={params :{number:num}};
              axios.get(url,data)
              .then(res=>setMsg(res.data))
              .catch(err=>setMsg("issue"+err));
}
  return(
       <>
       <center>
                 <h1>Even Odd App</h1>
                 <form onSubmit={check}>
                        <input type="number"placeholder="enter integer"
                         ref={rNum} onChange={hNum}/>
                         <br/><br/>
                        <input type="submit"value="Find Even/Odd"/>
                  </form>
                  <h2> { msg } </h2>
        </center>
        </>
        );
}
export default EvenOdd;
