function timing(){
    const Ownclock=document.getElementById('root');
    const now=new Date();
    const IndianTime=now.toLocaleTimeString();
    Ownclock.innerHTML=IndianTime;
}
setInterval(timing,1000);

const Ownclock=document.querySelector('#root');


Ownclock.style.fontSize="200px"
Ownclock.style.display="flex";
Ownclock.style.height="100vh";
Ownclock.style.justifyContent="center"
Ownclock.style.alignItems="center"




