let soccer_team = {
  name: "atletico madrid",
  city: "madird",
  country: "spain",
  top_scorers: ["aragones", "griezmann", "torez"],
  fans_millions: 400,
};

// db.collection("teams").add(soccer_team);

// Show all teams in Spain
db.collection("teams")
  .where("country", "==", "spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = "";
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query1").innerHTML += html;
  });

// Show all teams in Madrid, Spain
db.collection("teams")
  .where("country", "==", "spain")
  .where("city", "==", "madrid")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = "";
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query2").innerHTML += html;
  });

// Show all national teams (Remember there might be new national teams added later)
db.collection("teams")
  .where("city", "==", "N/A")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = "";
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query3").innerHTML += html;
  });

// Show all teams that are not in Spain
db.collection("teams")
  .where("country", "not-in", ["spain"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = "";
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query4").innerHTML += html;
  });

// Show all teams that are not in Spain or England
db.collection("teams")
  .where("country", "not-in", ["spain", "england"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = "";
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query5").innerHTML += html;
  });

// Show all teams in Spain with more than 700M fans
db.collection("teams")
  .where("country", "==", "spain")
  .where("fans_millions", ">=", 700)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = "";
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query6").innerHTML += html;
  });

// Show all teams with a number of fans in the range of 500M and 600M
db.collection("teams")
  .where("fans_millions", ">=", 500)
  .where("fans_millions", "<=", 600)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = "";
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query7").innerHTML += html;
  });

// Show all teams where Ronaldo is a top scorer
db.collection("teams")
  .where("top_scorers", "array-contains", "ronaldo")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    let html = "";
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query8").innerHTML += html;
  });

// Show all teams where Ronaldo, Maradona, or Messi is a top scorer
db.collection("teams")
  .where("top_scorers", "array-contains-any", ["ronaldo", "maradona", "messi"])
  .get()
  .then((data) => {
    let html = "";
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      html += `<br>${d.data().name}`;
    });
    document.getElementById("query9").innerHTML += html;
  });

// Update the worldwide fans (primitive data types) as follows:

// Real Madrid: 811 M worldwide fans. Also, change team name to Real Madrid FC

// db.collection("teams").doc("uZOliDl88xoUcgUOkyua").update({
//   fans_millions: 811,
//   name: "real madrid FC",
// });

// Barcelona: 747 M worldwide fans. Also, change team name to FC Barcelona

// db.collection("teams").doc("derzLUnZ4Cpm2zhaGs6P").update({
//   fans_millions: 747,
//   name: "FC barcelona",
// });

// Next, we want to update the top scorers (array) as follows:
// 1. Real Madrid: Remove Hazard from the list and add Crispo to the list

// db.collection("teams")
//   .doc("uZOliDl88xoUcgUOkyua")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("hazard"),
//   });

// db.collection("teams")
//   .doc("uZOliDl88xoUcgUOkyua")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("crispo"),
//   });

// 2. Barcelona: Remove Puyol from the list and add Deco to the list

// db.collection("teams")
//   .doc("derzLUnZ4Cpm2zhaGs6P")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("puyol"),
//   });

// db.collection("teams")
//   .doc("derzLUnZ4Cpm2zhaGs6P")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("deco"),
//   });

// Assume that we now want to store the jersey colors for some of our teams.
// We will first capture the new data in a single object.

// To keep things simple, we will add the jersey colors for just a couple of our teams as follows:
let color_real_madrid = {
  home: "white",
  away: "black",
};

// db.collection("teams").doc("uZOliDl88xoUcgUOkyua").update({
//   color: color_real_madrid,
// });

let color_barcelona = {
  home: "red",
  away: "gold",
};

// db.collection("teams").doc("derzLUnZ4Cpm2zhaGs6P").update({
//   color: color_barcelona,
// });

// Next, we want to update the jersey colors (object) as follows:
// Real Madrid: Purple jersey color for away matches

// db.collection("teams").doc("uZOliDl88xoUcgUOkyua").update({
//   "color.away": "purple",
// });

// Barcelona: Pink jersey color for away matches

// db.collection("teams").doc("derzLUnZ4Cpm2zhaGs6P").update({
//   "color.away": "pink",
// });
