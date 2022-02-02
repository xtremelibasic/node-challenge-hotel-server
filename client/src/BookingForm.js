import React from "react";

function BookingForm(props){
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="title">Title:</label>
                    <input type="text" className="form-control"  id="title"/>
                </div>
                <div>
                    <label for="firstName">First Name:</label>
                    <input type="text" className="form-control"  id="firstName"/>
                </div>
                <div>
                    <label for="surname">Surname:</label>
                    <input type="text" className="form-control"  id="surname"/>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div>
                    <label for="check-in">Check-in Date:</label>
                    <input type="date" className="form-control" id="check-in"/>
                </div>
                <div>
                    <label for="check-out">Check-out Date:</label>
                    <input type="date" className="form-control" id="check-out"/>
                </div>
                <button type="submit" className="btn-primary btn" onClick={props.formHandler} >Add Booking</button>
            </form>
        </div>
    )
}

export default BookingForm