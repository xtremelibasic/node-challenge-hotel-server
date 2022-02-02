import { useState } from "react";
import React from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import BookingForm from "./BookingForm";
import "./App.css";
moment().format();

function SearchResults(props) {
  // const [isClicked, setIsClicked] = useState(false);
//  const [profileClicked, setProfileClicked] = useState(false);

const [profileId, setProfileId] = useState(null);
  

  function toggleColor(event) {
    console.log(event.target.parentNode.id);
    const rowData = Array.from(document.querySelectorAll(".data-row"));
    rowData.forEach((data,index) => {
      if( index === event.target.parentNode.id){
        console.log(data)
        data.className = "highlight"
      } else {
        data.className = "noHighlight"
      }
      console.log(data)
    })
   

    // setIsClicked(!isClicked);
    // isClicked
    //   ? (event.target.parentNode.className = "highlight")
    //   : (event.target.parentNode.className = "noHighlight");
  }

function profile(event){
  setProfileId(event.target.id)
  console.log(document.getElementById("name"))
}
 
//  function formSubmitted(event){
//         event.preventDefault();
//         const newTitle = document.createElement("td");
//         newTitle.innerText = document.getElementById("name");
//         const newFirstName = document.getElementById("firstName").value;
//         const newSurname = document.getElementById("surname").value;
//         const newEmail = document.getElementById("email").value;
        
// }

  return (
    <div>
    <CustomerProfile id={profileId}/>
    <table className="table" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th>Stay Length</th>
          <th>Profiles</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => {
          //This id shows us only when the profile button is clicked not the whole row
          return (
          
            <tr id={result.id} class="data-row" onClick={toggleColor}>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {Math.ceil(
                  moment(result.checkOutDate).diff(moment(result.checkInDate)) /
                    86400000
                )}
              </td>
              <td><button id={result.id} className="btn btn-primary profile-btn" onClick={profile}>Show profile</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default SearchResults;
