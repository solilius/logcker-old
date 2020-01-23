// copy paste from w3schools XD
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
setInterval(()=>{
  $.get("/logs/step-one", data => {
    $("#step-one").html(convertToHTML(data)).animate({scrollTop: $('#step-one').prop('scrollHeight')}, 800);

  });
  
  $.get("/logs/step-two", data => {
    $("#step-two").html(convertToHTML(data)).animate({scrollTop: $('#step-two').prop('scrollHeight')}, 800);
  });
}, 2000)


function convertToHTML(data) {
  if(data.length == 0){
    return "<div style='padding:4%'> No Logs...</div>";
  }
  let final = "";
  data.forEach(log => {
    final += `<pre>> ${new Date(log.create_date).toLocaleDateString()}|${new Date(log.create_date).toLocaleTimeString()} - ${log.data}</pre>`;
  });
  return final;
}
