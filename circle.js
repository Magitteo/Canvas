window.onload = function () {
    var canvas = document.getElementById ("canvas"),
        context = canvas.getContext ("2d"), 
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var centerY = height * .5, 
        centerX = width * .5,
        offset = 20,
        offset2 = 40,
        offset3 = -20,
        RadiusX = 200;
        RadiusY = 100;
        rad = 10,
        speed = .05,
        speed1 = .08,
        angle = 0,
        angle1 = 0;
    
    var x, 
        y,
        x2,
        y2,
        x3,
        y3,
        x4,
        y4;

    render ();

    function render () {

        x = centerX + RadiusX * Math.cos (angle); 
        y = centerY + RadiusY * Math.sin (angle1);
        x2 = centerX + offset  + RadiusY * Math.sin (angle); 
        y2 = centerY + offset + RadiusX * Math.cos (angle);
        x3 = centerX + offset2  + RadiusX * Math.cos (angle); 
        y3 = centerY + offset2 + RadiusY * Math.sin (angle1);
        x4 = centerX + offset3  + RadiusY * Math.sin (angle1); 
        y4 = centerY + offset3 + RadiusX * Math.cos (angle);
        
        
        //context.fillStyle = "rgba (255,0,255,1)";
        
        context.clearRect(0,0,width, height); 
    
        context.fillStyle = "#FF0000";
        context.beginPath ();
        context.arc (x,y,rad,0,Math.PI*2,false);
        context.fill ();
        context.fillStyle = "#00FF00";
        context.beginPath ();
        context.arc (x2,y2,rad,0,Math.PI*2,false);
        context.fill ();
        context.fillStyle = "#0000FF";
        context.beginPath ();
        context.arc (x3,y3,rad,0,Math.PI*2,false);
        context.fill ();
        context.fillStyle = "#FF00FF";
        context.beginPath ();
        context.arc (x4,y4,rad,0,Math.PI*2,false);
        context.fill ();

        angle += speed;
        angle1 += speed1;
        requestAnimationFrame (render);
    }
    
    



};