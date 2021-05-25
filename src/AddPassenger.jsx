import { useMutation } from 'react-query';
import { useState} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React, { Component } from 'react';

function AddPassenger() {
  const mutation = useMutation((item) =>
    axios.post("https://api.instantwebtools.net/v1/passenger/", item)
  );
    if (mutation.isSuccess) console.log(mutation.data.data);

  const formik = useFormik({
        initialValues: {
            name: "",
            trips: 0,
            airline: 1,
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            mutation.mutate({
            name: values.name,
            trips: values.trips,
            airline: values.airline,
            });
        },
     });
  const history = useHistory();   
return (
        <div className="addForm">
            <h1>Creating a new Passenger</h1>
          <form onSubmit={formik.handleSubmit}>
              <label>Name: <input id="name" type="text" onChange={formik.handleChange} /></label>
              <label>Trips: <input id="trips" type="number" onChange={formik.handleChange} /></label>
              <label>Airline: <input id="airline" type="number" onChange={formik.handleChange} /></label>
              <button type="submit">ADD NEW</button>
          </form>
          {mutation.isLoading && <p>Please Wait...</p>}
          {mutation.isSuccess && <p>Success! ID: {mutation.data.data._id}</p>}
        <br />
        {/* <div>
            <button onClick={() => history.goBack()}>Go Back</button>
        </div> */}
        </div>
    )
}
export default AddPassenger;