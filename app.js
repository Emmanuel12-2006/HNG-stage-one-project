document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector(".time"); // get element that displays the time
  const dayElement = document.querySelector(".date"); //get  element that displays the week day
  const yearElement = document.querySelector(".year"); // getting the elementing that display the date for the footer

  function updateTime() {
    const now = new Date();
    timeElement.textContent = now.toUTCString().split(" ")[4];

    dayElement.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
    yearElement.textContent = now.getFullYear();
  }
  updateTime();
  setInterval(updateTime, 1000);
});







// function showTime() {
//     const date = new Date();
//     const hours = date.getHours() % 12 || 12;
//     const minutes = date.getMinutes().toString().padStart(2, "0");
//     const seconds = date.getSeconds().toString().padStart(2, "0");
  
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById("time").textContent = timeString;
// }
  
//   setInterval(showTime, 1000); 


// function showDate() {
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1; 
//     const day = date.getDate();
  
//     const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
//     document.getElementById("date").textContent = formattedDate;
// }
  
//   showDate();

  
// let curruntYear = new Date().getFullYear()
// document.querySelector('.year').innerHTML = curruntYear
  