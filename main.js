var n1 = 1;
var n2 = 1;
var n3 = 1;
var m = 0;
var a = 1;
var b = 1;

function createControl(){
    let mctrl = document.createElement("input");
    mctrl.type = "range";
    mctrl.min = 0;
    mctrl.max = 20;
    mctrl.value = 0;
    mctrl.step = 0.01;
    mctrl.id = "mctrl";
    mctrl.className = "mctrl";
    mctrl.onchange = (ev)=>{
        m = document.getElementById("mctrl").value;
    }

    document.body.appendChild(mctrl);
    document.body.appendChild(document.createElement("br"));

    let mshow = document.createElement("h2");
    mshow.innerText = mctrl.value.toString();
    mshow.id = "mshow";
    mshow.style = "text-align: center;";

    document.body.appendChild(mshow);

    updateM();
}

function updateM(){
    ctrl = document.getElementById("mctrl");
    m = ctrl.value;
    let p = (m*100/ctrl.max);
    document.getElementById("mshow").innerText = Math.round(p).toString()+"%";
    setTimeout(updateM, 20);
}

function setup(){
    createCanvas(innerWidth-(innerWidth/50), innerHeight-(innerHeight/5));
    setTimeout(createControl, 100);
}

function supershape(theta){
    var r = 1;

    parts = [
        pow(abs((1/a)*Math.cos(theta*m/4)), n2),
        pow(abs((1/b)*Math.sin(theta*m/4)), n3)
    ];
    parts[2] = n1 * Math.sqrt(parts[0]+parts[1]);
    //console.log(parts);

    if(parts[2] == 0){
        return 0;
    }

    return 1 / parts[2];
}

function draw(){
    background(51);
    // stroke(255);
    // strokeWeight(5);
    // text("Sadra In The Box", width/2, height/2)
    translate(width/2, height/2);

    stroke(255);
    strokeWeight(30);
    noFill();

    var radius = 200;

    beginShape();

    for (let angle = 0; angle < TWO_PI; angle += 0.1){
        var r = supershape(angle);
        var x = radius * r * Math.cos(angle);
        var y = radius * r * Math.sin(angle);
        vertex(x, y);
    }

    endShape(CLOSE);
    // m += 0.01;
}