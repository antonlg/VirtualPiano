const pianoWhiteKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
const pianoBlackKeys = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];

document.addEventListener("keydown", function(event){
    let soundSource;
    if (pianoWhiteKeys.includes(event.code))
        soundSource = "white_keys/";
    if (pianoBlackKeys.includes(event.code))
        soundSource = "black_keys/";
    if(soundSource != ""){
        let sound = new Audio("../../" + soundSource + "/" + (event.key).toUpperCase() + ".mp3");
        sound.play();
    }
});