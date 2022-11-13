import React,{useState} from "react";

function App() {
  const [calc,setCalc]=useState("")
  const [result,setResult]=useState("")

  const oprs=['/','*','+','-','.']  //operators assingned
  const updateCalc=value=>{         //operations on operators
    if (
      oprs.includes(value) && calc === ''||                      //included in calculator
      oprs.includes(value) && oprs.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc+value)
    if (!oprs.includes(value)){
      setResult(eval(calc+value).toString())
    }

  }
  const createDigits=()=>{
    const digits =[];
    for(let i=1;i<10;i++){
      digits.push(
        <button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }
  const calculate=()=>{
    setCalc(eval(calc).toString()) //= button
  }
  const refresh=()=>{        //DEL button
    setCalc(0)
    setResult(0)
  }

  return (
    <>
    <div className="App">
      <div className="calculator">
        <div className="display">        
         {result ? <span>({result})</span> : ''} 
         {calc ||"0"}                          
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={refresh}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
