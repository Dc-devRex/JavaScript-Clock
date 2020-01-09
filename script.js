var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var escape;
var evening = 18;

//Get it to show the current time on the page.

var showCurrentTime = function()
{
    //display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //Set hours

    if (hours >= noon)
    {
        meridian = "PM";
    }

    if (hours > noon)
    {
       hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;    
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;

       clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function()
{
    var time = new Date().getHours();
    var messageText;
    var image = 'jurassicparkgate.jpg';
   
    var timeEventsJS = document.getElementById('timeEvent');
    var lolDinoImage = document.getElementById('lolDinoImage');

    if (time == escape)
    {
        image = "Velociraptor_tall.jpg";
        messageText = "Velociraptor Has Escaped! Clever Girl!";
    }
    else if (time == wakeuptime)
    {
        image = "jurassicparkgate.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime)
    {
        image = "goatbait.jpg";
        messageText = "Let's have some lunch!"
    }
    else if (time == naptime)
    {
        image = "night.jpg";
        messageText = "Sleep Tight!";
    }
    else if (time < noon)
    {
        image = "dinosaur-morning.jpg";
        messageText = "Good Morning!";
    }
    else if (time >= evening)
    {
        image = "moon.jpg";
        messageText = "Good Evening!";
    }
    else
    {
        image = "dinosaur-morning.jpg";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventsJS.innerText = messageText;
    lolDinoImage.src = image;

    showCurrentTime();
};
updateClock();

//Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

//Getting the Escapee Button to work
var dinoEscapee = document.getElementById("dinoEscapeeButton");

var escapeEvent = function()
{
    if (escape < 0)
    {
        escape = new Date().getHours();
        dinoEscapeeButton.innerText = "Contain the Asset!";
        dinoEscapeeButton.style.backgroundColor = "";
    }
    else
    {
        escape = -1;
        dinoEscapeeButton.innerText = "WARNING: Do Not Press This Button";
        dinoEscapeeButton.style.backgroundColor = "#";
    }
};

dinoEscapee.addEventListener("click", escapeEvent);
escapeEvent();

//Activates Wake-up Selector

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);




