// load and configure the ToneJS sample player
var scratch = new Tone.Player("scratch1.wav");
scratch.loop = true;
scratch.connect(Tone.Master);

var track = new Tone.Player("rumble.mp3");
track.connect(Tone.Master);


// when the nexus UI system loads we call this function
nx.onload = function() {
    
    // set default state of controls
    vinyl1.defaultspeed = 0;
    
    // set event listener for all events on the vinyl control
    vinyl1.on("*", vinylActions);
    
    // and event listener for all events on the toggle button
    toggle1.on("*", toggleActions);
    
}

// callback for actions on the vinyl control
var vinylActions = function(event) {
    
    // are we pushing forward?
    if (vinyl1.val.speed > 0) {
        scratch.reverse = false;
        scratch.playbackRate = vinyl1.val.speed;
    }
    
    // maybe pushing backwards?
    else if (vinyl1.val.speed < 0 ) {
        scratch.reverse = true;
        
        // playback rate must be a positive number
        scratch.playbackRate = (-1 * vinyl1.val.speed);
    }
}

var trackSel = function(num2) {
    
    track.stop();
    
    function restart(){
        
        track.loop = true;
        track.reverse = false;
        
        track.start();
    }
    
    if (num2 == 1) {
        track.load("rumble.mp3", restart);
    }
    else if (num2 == 2) {
        track.load("grime.mp3", restart);
    }
    else if (num2 == 3) {
        track.load("halftime.mp3", restart);
    }
    
    else if (num2 == 4) {
        track.load("replicant.mp3", restart);
    }
    else if (num2 == 5) {
        track.load("hip hop.mp3", restart);
    }
    
    
}

var testFun = function(num) {
    
    // stop the player first
    scratch.stop();
    
    function restart(){
        
        scratch.loop = true;
        scratch.reverse = false;
        scratch.playbackRate = vinyl1.val.speed;
        
        scratch.start();
    }
    
    if (num == 1) {
        scratch.load("scratch1.wav", restart);
    }
    else if (num == 2) {
        scratch.load("yeah.wav", restart);
    }
    else if (num == 3) {
        scratch.load("hit em.wav", restart);
    }
    else if (num == 4) {
        scratch.load("fresh.wav", restart);
    }
    else if (num == 5) {
        scratch.load("siren.wav", restart);
    }
    else if (num == 6) {
        scratch.load("bass.wav", restart);
    }
    
    
    console.log(num);
}

// callback for actions on the toggle button
var toggleActions = function(event) {
    
    // set the turntable to run or stop
    // depending on the toggle button value
    
    if (event.value == 1 ){
        vinyl1.defaultspeed = 0.05;
        track.start();
    }
    else {
        vinyl1.defaultspeed = 0;
        track.stop();
        
    }
    
    // if the sample player isn't running yet
    if (scratch.state == "stopped") {
        scratch.start();
    }
}
