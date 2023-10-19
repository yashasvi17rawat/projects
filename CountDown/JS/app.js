const endDate="10 january 2023 12:00 am";
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");
function clock()
{
    const end=new Date(endDate);
    const now=new Date();
    //diff in seconds
    const diff=(end-now)/1000;

    if(diff<0)
    return;

    //to count days
    const days=Math.floor(diff/(60*60*24));
    inputs[0].value=days;
    //to count hours
    const hours=Math.floor((diff/(60*60))%24);
    inputs[1].value=hours;
    //to count min
    const mins=Math.floor((diff/60)%60);
    inputs[2].value=mins;
    const secs=Math.floor(diff%60);
    inputs[3].value=secs;

}
clock();

//to call the page after every one second..
setInterval(function() {clock()},1000);