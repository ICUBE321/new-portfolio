const emailJSAccountKey = "xk-3TY1kaFT9Ay-9E";
const serviceID = "service_avvoepi";
const templateID = "template_cygsfji";

let urls = [
  {
    id: "linkedIn-href",
    link: "https://www.linkedin.com/in/izien-iremiren/",
  },
  {
    id: "health-app-href",
    link: "https://cloud-health-app.herokuapp.com/",
  },
  {
    id: "iot-app-href",
    link: "https://github.com/ICUBE321/Fire-Detection-System.git",
  },
  {
    id: "meal-planner-href",
    link: "https://github.com/ICUBE321/meal-planner.git",
  },
];

// setup the portfolio links
urls.forEach(setUpLinks);
function setUpLinks(item) {
  var anchor = document.getElementById(item.id);
  anchor.setAttribute("href", item.link);
}

// listen to the form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
});

// function sendEmail(event) {
//   event.preventDefault;

//   emailjs.sendForm(serviceID, templateID, "#myForm").then(
//     function (response) {
//       console.log("SUCCESS!", response.status, response.text);
//       alert("SUCCESS!");
//     },
//     function (error) {
//       console.log("FAILED...", error);
//       alert("FAILED...", error);
//     }
//   );
// }
