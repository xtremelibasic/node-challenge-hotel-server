import React, { useState, useEffect } from "react";

function CustomerProfile(props){
    const [isLoading,setIsLoading] = useState(false);
    const [errorOcurred, setErrorOccurred] = useState("");

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(`https://localhost:5000/${props.id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setIsLoading(false);
    //     })      
    //     .catch(err => {
    //         setErrorOccurred(err)
    //         console.warn(err)
    //      } )

    // }, [props.id])
    
    return (
        <div>
        {isLoading ? (<h1>Loading...</h1>) : (<h1>Customer {props.id} profile</h1>)}
        {errorOcurred ? (<span>{errorOcurred}</span>): (<span>No error</span>)}
        </div>
        
    )
}

export default CustomerProfile;