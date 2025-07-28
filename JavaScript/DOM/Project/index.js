function timing(){
    const time=document.getElementById('root')
    const date1 = new Date();
    const date2 = new Date("2028-07-14T00:00:00");
    const date = date2-date1;
    const days = Math.floor(date/(1000*60*60*24));
    const hour = Math.floor((date/(1000*60*60))%24);
    const minute = Math.floor((date/(1000*60))%60);
    const second = Math.floor((date/(1000))%60);
    time.innerHTML=`
     Days:${days}<br>
      hour:${hour} minute:${minute} second:${second}`;
      time.style.fontSize = "40px";
      time.style.display = "flex";
      time.style.height = "100vh";
      time.style.justifyContent = "center";
      time.style.alignItems = "center";
      time.style.flexDirection = "column";
}
setInterval(timing,1000);
const time=document.getElementById('root')

