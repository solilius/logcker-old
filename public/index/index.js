setInterval(()=>{
    getStepLogs('step-one');
    getStepLogs('step-two');
}, 1400);


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

let isAutoScroll = true;
function toggleAutoScroll(){
    isAutoScroll = !isAutoScroll;
    $('.auto').toggleClass("auto-on auto-off");

}

function getStepLogs(step){
  $.get("/logs/" + step, data => {
    $('#' + step).html(convertToHTML(data));
        if(isAutoScroll) $('#' + step).animate({scrollTop: $('#' + step).prop('scrollHeight')}, 900);
  });
}

function deleteAll(){
  $.ajax({url: "/logs/all", method: 'DELETE'});
}
