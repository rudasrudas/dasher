window.onload = function(){
    initNav();
}

function initNav(){
    // Navigation bar items
    document.getElementById('nav-emails').addEventListener('click', displayDashboard('email-dashboard'), false);
    document.getElementById('nav-messages').addEventListener('click', displayDashboard('message-dashboard'), false);
    document.getElementById('nav-notes').addEventListener('click', displayDashboard('note-dashboard'), false);
    document.getElementById('nav-music').addEventListener('click', displayDashboard('music-dashboard'), false);
    document.getElementById('nav-weather').addEventListener('click', displayDashboard('weather-dashboard'), false);

    // Hide nav bar items
    for(let element of document.getElementsByClassName('nav-item-close')){
        element.addEventListener('click', (event) => {
            event.stopPropagation();
            element.parentElement.classList.add('no-display')
        }, false);
    }

    // Return buttons
    for(let element of document.getElementsByClassName('return-btn')){
        element.addEventListener('click', displayDashboard('default-dashboard'), false);
    }

    //Return on esc key
    document.body.addEventListener('keyup', function(e) {
        if(e.key === "Escape"){
            displayDashboard('default-dashboard')();
        }
    });

    //Music nav
    document.getElementById('music-playlist').addEventListener('click', togglePlaylistVisibility, false);

    //Weather nav
    document.getElementById('weather-now-tab').addEventListener('click', displayWeather('weather-now'), false);
    document.getElementById('weather-hourly-tab').addEventListener('click', displayWeather('weather-hourly'), false);
    document.getElementById('weather-daily-tab').addEventListener('click', displayWeather('weather-daily'), false);
}

function togglePlaylistVisibility(){
    let pl = document.getElementById('music-song-feed').parentElement;
    let m = document.getElementById('music-playlist-feed').parentElement;

    if(pl.classList.contains('no-display')){
        m.classList.add('no-display');
        pl.classList.remove('no-display');
    }
    else {
        m.classList.remove('no-display');
        pl.classList.add('no-display');
    }
}

function displayDashboard(dashId){
    return function(){
        hideAllDashboards();
        document.getElementById(`${dashId}`).classList.remove('no-display');
    }
}

function displayWeather(weatherId){
    return function(){
        hideAllWeathers();
        document.getElementById(`${weatherId}`).parentElement.classList.remove('no-display');
    }
}

function hideAllDashboards(){
    for(let dash of document.getElementsByClassName('dashboard-window')){
        dash.classList.add('no-display');
    }
}

function hideAllWeathers(){
    for(let dash of document.getElementsByClassName('weather-window')){
        dash.parentElement.classList.add('no-display');
    }
}