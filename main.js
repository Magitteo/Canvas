// var v1 = vector.create (10,5);

// console.log (v1.getX());
// console.log (v1.getY());
// console.log (v1.getLength());
// console.log (v1.getAngle());

// var r = vector.getLength ();
// console.log (r);

// var f = vector.getAngle ();
// console.log (f);

// var a = vector.setAngle (Math.PI / 6);
// var b = vector.setLength (100);

// var x = vector.getX ();
// var y = vector.getY ();

// console.log (x);
// console.log (y);

// var v1 = vector.create (10,10);
// var v2 = vector.create (10,5);
// var v3 = v1.add (v2);

// console.log (v3.getX(), v3.getY());

// var v1 = vector.create (10,10);
// var v2 = v1.multiply (2);

// console.log (v1.getLength(), v2.getLength());


window.onload = function (){
//function start (){
    var canvas = document.getElementById ("canvas"),
        context = canvas.getContext ("2d"), 
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        // position = vector.create (100,100),
        // velocity = vector.create (0,0),
        p = particle.create (100,height, 10, -Math.PI/2),
        accel = vector.create (0.1,0.1);
    


    // velocity.setLength (3);
    // velocity.setAngle (Math.PI/6);

    update ();

    function update (){
        context.clearRect (0,0,width, height);
        // for (var i = 0; i < numParticles; i += 1){ 
        //     var p = particles [i];
        //     p.update();
        //     context.beginPath();
        //     // context.arc (p.position.getX(), p.position.getY(), 10, 0, Math.PI*2, false);
        //     context.arc (p.position.getX(), p.position.getY(), 10, 0, Math.PI*2, false);
        //     context.fill();
        //     }
        p.accelerate (accel);
        p.update();
        context.beginPath();
        context.arc (p.position.getX(), p.position.getY(), 4, 0, Math.PI*2, false);
                
        context.fill();
                
        requestAnimationFrame (update);

    }
    
};
