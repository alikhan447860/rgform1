import React, { useEffect, useState } from 'react'

const Form = () => {
    const data={name:"",email:"",password:""};
    const [inputdata,setinputdata]=useState(data);
    const [flag,setflag]=useState(false);
    useEffect(()=>{
      
    },[flag])
    function handeldata(e){
      setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
   function handelsubmit(e){
    e.preventDefault();
    if(!inputdata.name || !inputdata.email || !inputdata.password){
      alert("All fileds are mandatory");
    }
    else{
      setflag(true);
    }
   }
  return (<>
    <pre> {(flag)?<h2 className='ui-define'>Hello {inputdata.name},You are registerd</h2>:""}</pre>
    <form className='container' onSubmit={handelsubmit}>
      <div className='header'>
        <h1>Registration Form</h1>
      </div>
      <div>
        <input type="text" name="name" placeholder='Enter your name' id="" value={inputdata.name} onChange={handeldata}/>
      </div>
      <div>
        <input type="text" name="email" placeholder='Enter your email' id="" value={inputdata.email} onChange={handeldata}/>
      </div>
      <div>
        <input type="password" name="password" placeholder='Enter your password' id="" value={inputdata.password} onChange={handeldata} />
      </div>
      <div><button type='submit'>Submit</button></div>
    </form>
    </>
  )
}

export default Form
