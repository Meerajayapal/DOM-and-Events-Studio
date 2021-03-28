// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const paragraph    = document.getElementById("flightStatus");
    const takingOff    = document.getElementById("takeoff");
    const land         = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const up1     = document.getElementById("up");
    const down1   = document.getElementById("down");
    const right1  = document.getElementById("right");
    const left1   = document.getElementById("left");
   
    var imgObj = null;
    imgObj = document.getElementById('rocket');
    imgObj.style.position= 'relative';

    imgObj.style.top = '0px';
    
    imgObj.style.left= '0px';
    


    takingOff.addEventListener("click",function(){
    confirm("Confirm that the shuttle is ready for takeoff.");
    paragraph.innerHTML = "Shuttle in flight.";
    document.getElementById("shuttleBackground").style.backgroundColor="Blue";
    spaceShuttleHeight.innerHTML= "10000";
 });

    land.addEventListener("click",function(){
    alert("The shuttle is landing. Landing gear engaged.");
    paragraph.innerHTML = "The shuttle has landed.";  
    document.getElementById("shuttleBackground").style.backgroundColor="Green";
    spaceShuttleHeight.innerHTML= "0"; 
});

    abortMission.addEventListener("click",function(){
    confirm("Confirm that you want to abort the mission.");
    paragraph.innerHTML = "Mission aborted.";  
    document.getElementById("shuttleBackground").style.backgroundColor="Green";
    spaceShuttleHeight.innerHTML= "0"; 
}); 
   


    up1.addEventListener("click",function(){
            imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
            document.getElementById("rocket").style.backgroundColor="Green";            
            spaceShuttleHeight.innerHTML= "10000"; 
}); 

    down1.addEventListener("click",function(){
            imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
            document.getElementById("rocket").style.backgroundColor="Green";
            spaceShuttleHeight.innerHTML= "0"; 
});

    left1.addEventListener("click",function(){
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    document.getElementById("rocket").style.backgroundColor="Green";            
    
}); 

    right1.addEventListener("click",function(){
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    document.getElementById("rocket").style.backgroundColor="Green";
   
});    
       

}

window.addEventListener("load", init);
