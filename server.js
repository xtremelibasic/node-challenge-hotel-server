const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//Use this array as your (in-memory) data store.
const bookings = require("./bookings.json");
const res = require("express/lib/response");
const { request } = require("express");

app.get("/", function (request, response) {
  response.send("Hotel booking server.  Ask for /bookings, etc.");
});

// TODO add your routes and helper functions here
app.post("/create-booking", (request,response) => {
  bookings.concat(request.body);
  response.send("Booking created")
})

app.get("/all-bookings", (request, response) => {
  response.send(bookings)
})

app.get("/:id", (request, response) => {
  let booking = bookings.filter(booking => booking.id == Number(request.params.id))

  if(booking.length > 0){
    response.send(booking)
  } else {
    response.status(400)
  }
  
})

app.delete("/:id", (request, response) => {
  let booking = bookings.filter(booking => booking.id !== Number(request.params.id) );
  console.log(booking)
  if(booking.length > 0){
    response.send(booking);
  } else {
    response.status(400);
  }
  
})

const listener = app.listen(5000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
