import React,{useEffect, useState} from 'react';

const Home = () => {
    const [userName,setuserName]=useState('');
     
    const userContact = async ()=>{
        try{
         const res = await fetch("/getdata",{
             method:"GET",
             headers:{
                 "Content-Type":"application/json"
             }
         })     
         const data = await res.json();
         setuserName(data.name);
         if(!res.status === 200 ){
            const error= new Error(res.error);
            throw error;
          }
        }catch(err){
    console.log(err);
        }
    }
    useEffect(()=>{
        userContact();
    },[]);

    return (
        <div className="container text-center mt-5 d-flex justify-content-center align-items-center" style={{height:"60vh"}}>
            <h1>Welcome to MERN website {userName ? userName : ""}</h1>
        </div>
    )
}

export default Home
