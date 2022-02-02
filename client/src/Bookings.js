import { useEffect, useState } from "react";
import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

   const search = searchVal => {
    let filtered = bookings.filter(booking => booking.firstName === searchVal || booking.surname === searchVal);
    setBookings(filtered);
  };
  useEffect(()=> {
    console.log("Fetching bookings data");

    fetch("https://localhost:5000/all-bookings")
    .then(res => res.json())
    .then(data => {
      setBookings(data);
    })
    .catch(err => setError(err))
  }, [])
 
  console.log(setBookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
      { error ? (<span>{error}</span>) : (<span></span>)}
    </div>
    
  );
};

export default Bookings;
