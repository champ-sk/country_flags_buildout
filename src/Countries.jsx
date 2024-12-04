import { useEffect, useState } from "react";

function CountryCard({name, flag}){
return <>
<div 
style={{
    display:"flex",
    border: "1px solid gray",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    flexDirection:"column",
    alignItems:"center",
padding:"10px",
textAlign:"center",
}}>
    <img src={flag} alt={`The name of flag is +${name}`} style={{width:"100px" ,height:"100px"}}/>
    <h2>{name}</h2>
</div>
</>
}

const Countries = ()=>{
    const API_URL ="https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);
    console.log({countries});
    useEffect(()=>{
        fetch(API_URL)
        .then((res)=>res.json())
        .then((data)=>setCountries(data))
        .catch((e)=>console.error("Error fetching data: "+e));
    },[]);
   
    return (
<>
<div
style={{
    display:"flex",
    flexWrap:"wrap",
    gap: "10px",
}}
>{
countries.map((e)=> (
    <CountryCard name={e.name} flag={e.flag}/>
))}
</div>


     

</>
    );
};
export default Countries ;