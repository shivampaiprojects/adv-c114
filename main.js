function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

}
function take_snapshot(){
    name = window.prompt('File name:')
    save(name +  '.png');
}