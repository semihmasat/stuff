//just following along coding train and need to store this somewhere

let x_vals = [];
let y_vals = [];

let a, b, c;

const learningRate = 0.2;
const optimizer = tf.train.adam(learningRate);

const curveX = [];

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);

    a = tf.variable(tf.scalar(random(-1,1)));
    b = tf.variable(tf.scalar(random(-1,1)));
    c = tf.variable(tf.scalar(random(-1,1)));
    d = tf.variable(tf.scalar(random(-1,1)));

    for (let x = -1; x < 1.0002; x+= 0.01){
        curveX.push(x);
    }
}

function predict(pos_x){
    const xs = tf.tensor1d(pos_x);
    //const ys = a.mul(xs.square()).sum(b.mul(xs)).sum(c);
    const ys = xs.pow(3).mul(a).add(xs.square().mul(b)).add(xs.mul(c)).add(d);

    xs.dispose();
    return ys;
}

function loss(pred,labels){
    return pred.sub(labels).square().mean();
}

function mousePressed(){
    let x = map(mouseX, 0, width, -1, 1);
    let y = map(mouseY, 0, height, 1, -1);

    x_vals.push(x);
    y_vals.push(y);
}

function draw(){
    if(x_vals.length > 0) {
        const ys = tf.tensor1d(y_vals);
        optimizer.minimize(() => loss(predict(x_vals),ys));
        ys.dispose()
    };
    
    background(0);
    stroke(255);
    strokeWeight(6);

    for(let i=0; i < x_vals.length; i++){
        let px = map(x_vals[i],-1,1,0,width);
        let py = map(y_vals[i],-1,1,height,0);

        point(px,py);
    }

    const ys = tf.tidy(() => predict(curveX));
    let curveY = ys.dataSync();
    ys.dispose();

    beginShape();
    noFill();
    stroke(255);
    strokeWeight(2);

    for (let i = 0; i < curveX.length; i++){
        let x = map(curveX[i], -1,1, 0, width);
        let y = map(curveY[i], -1,1, height, 0);

        vertex(x,y);
    };

    endShape();
}