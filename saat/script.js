
let username = String(prompt("Please enter the username."));
let isim = document.querySelector("#myName");


if(username.length >0){
    isim.innerHTML=username[0].toUpperCase()+username.slice(1);
}else{
    console.log("Please enter the username ,Try Again!!!");
}

function timer(){
    const now = new Date();
    const hour = now.getHours(); 
    const time = now.getMinutes(); 
    const day = now.getDay();
    const second = now.getSeconds();
    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    const formatDay=daysOfWeek[day];
    let section =document.querySelector("#myClock");

    section.innerHTML = `${hour}: ${time} : ${second} ${formatDay}`;
    setInterval(timer,1000);

}

timer();