const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const listing = require("./models/listing.js");
const { title } = require("process");
const { log } = require("console");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/skyward");
}

main().then((res) => {
  console.log(`Connection Succesful !`);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:3000`);
});

//Single Data Addition Route

// app.get("/listingtest", (req, res) => {
//   let newListing = new listing({
//     title: "My Home",
//     description: "Lake Front View",
//     price: 1200,
//     location: "Hyderabd",
//     country: "India",
//   });
//   newListing
//     .save()
//     .then((res) => {
//       console.log(`Data Saved Successfully!`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   res.send(`New Listing Added`);
// });

app.get("/", (req, res) => {
  res.send(`This is the landing Page`);
});

app.get("/listings", async (req, res) => {
  let alllistings = await listing.find();
  res.render("index.ejs", { alllistings });
});

app.post("/listings", async (req, res) => {
  let newList = req.body.listing;
  let newListing = new listing(newList);
  await newListing
    .save()
    .then((res) => {
      console.log(`Data Saved Successfully!`);
    })
    .catch((err) => {
      console.log(err);
    });
  res.send(
    `<p>New Listing added.Redirecting to Listing Page </p>
      <script>
      setTimeout(()=>{window.location.href = "/listings";},2000)
      </script>`
  );
});

//Edit Route

app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  let fList = await listing.findById(id);
  res.render("edit.ejs", { fList });
});

app.get("/listings/new", async (req, res) => {
  res.render("new.ejs");
});

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let fList = await listing.findById(id);
  res.render("show.ejs", { fList });
});

app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let newList = req.body;
  await listing.findByIdAndUpdate(id, { newList });
  console.log(`Updated Successfully`);
  console.log(id);
  let fList = await listing.findById(id);
  console.log(fList);
  res.render("show.ejs", { fList });
});
