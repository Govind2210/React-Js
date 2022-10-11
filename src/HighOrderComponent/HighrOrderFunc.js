import React ,{useState} from 'react'


function HighrOrderFunc() {
  return (
    <>
        <div className='App'> 
            <h1>High order function</h1>
            <HOCRed cmp={Counter}/>
            <HOCGreen cmp={Counter}/>
            <HOCBlue cmp={Counter}/>
            
            
        </div>


    </>
  )
}
// high order component
function HOCRed(props){
    return <h1 style={{backgroundColor:'red' , width:120 , height:150}}>Red<props.cmp/></h1>
}
function HOCGreen(props){
    return <h1 style={{backgroundColor:'green' , width:120 , height:150}}>Green<props.cmp/></h1>
}
function HOCBlue(props){
    return <h1 style={{backgroundColor:'blue' , width:120 , height:150 }}>Blue<props.cmp/></h1>
}



// normal function
function Counter(){
    const [count ,setCount] = useState(0)
    return(
        <div>
        <h3>{count} </h3>
        <button onClick={()=>setCount(count+1)}>Update Me</button>
        </div>
    )
   
}

export default HighrOrderFunc