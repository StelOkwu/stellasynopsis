import { useQuery } from 'react-query';
//import { Link, Switch } from 'react-router-dom';
import  { useHistory } from 'react-router-dom';
//import { createHashHistory } from 'history';
import React, { Component, useState } from 'react';

import './styles.css';

 //export const history = createHashHistory();
function Passengers() {
     const [page, setPage] = useState(0);

     const fetchPassengers = async (page) => {
        const res = await fetch(
            `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
        );
        return res.json();
        };

    const history = useHistory();

    const { isLoading, error, data, isSuccess } = useQuery(["passengers", page],
    () => fetchPassengers(page),
    { KeepPreviousData: false }
    
     ); 
//    function handleClick() {
//        history.push("/AddPassenger");
//    }
       
       
    return (
        <div className="scroll">
            <h1>Passenger's List</h1>
            <button onClick={() => setPage((old) => Math.max(0, old -1))}>
                {" "}
                -{" "}
            </button>
            <button onClick={() => setPage((old) => old + 1)}>+</button>
            
            <p>{page}</p>
            
            <div className="passlist">
            { isSuccess && 
            data.data.map((item) => (
            <div key={item._id}>
                <p>Name: <b>{item.name}</b>, 
                ID: <b>{item._id}</b>  
                {/* Airline: <b>{item.airline}</b> */}
                </p>
            </div>
           ))}
           {isLoading && <p>still Loading...</p>}
           {error && <p>Error Occurred!</p>}
        </div>
        {/* <button type="button" onClick={handleClick}>Go to AddPassenger</button>
        */}
      
        </div>

    );

}
export default Passengers;