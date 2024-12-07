import React,{useState} from 'react';
 export default function App(){
  const [firstName,setFirstName] =useState("");
  const [lastName,setLastName] =useState("");
  const [fullName,setFullName] =useState("");
  const [error,setError] =useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!firstName || !lastName){
      setError(true);
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError(false);
    }
  };
  return(
    <>
  <div style={{margin:"20px" ,fontFamily:"Arial, sans-serif"}}>
    <h1>Full Name Display</h1>
  </div>
  <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',maxWidth:'300px'}}>
   <label> 
    First Name:
   <input
   type ="text"
   value={firstName}
   onChange={(e)=>setFirstName(e.target.value)}
   style={{margin:'5px 0',padding:'5px'}}
   />
   </label>
   <label>
   Lastt Name:
   <input
   type ="text"
   value={lastName}
   onChange={(e)=>setLastName(e.target.value)}
   style={{margin:'5px 0',padding:'5px'}}
   />
   </label>
   {error && (
    <p style={{color:'red', margin:'5px,0'}}>
      Please fill out this field.
      </p>
   )}
   <button type="submit" style={{padding:"5px",background:'#007Bff', color:'#fff', border:"none" , cursor:"pointer"}}>
    Submit
   </button>
  </form>
  {fullName && (
    <div style={{marginTop:'20px'}}>
      <h2>Full Name:</h2>
      <p>{fullName}</p>
    </div>
  )}
  </>
  );
}
