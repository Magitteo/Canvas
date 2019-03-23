window.onload = function () {
    var canvas = document.getElementById ("canvas"),
        context = canvas.getContext ("2d"), 
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var centerY = height * .5, 
        centerX = width * .5,
        //baseRadius = 150;
        baseAlpha = 0.5,
        offset = 0.5, // 120 per radius 
        speed = .01,
        angle = 0;

    render ();

    function render () {
        //context.fillStyle = "#FF0000";
        //context.fillStyle = "rgb (255,255,0)";
        //var radius = baseRadius + Math.sin (angle) * offset;
        var alpha =  baseAlpha + Math.sin(angle) * offset;
        context.fillStyle = "rgba(255, 255, 0, " + alpha + ")";
        context.clearRect (0,0,width, height);
        context.beginPath ();
        context.arc (centerX, centerY, 200, 0 , Math.PI * 2, false);
        context.fill ();
        angle += speed;

        // console.log (alpha);

        requestAnimationFrame (render);
    };

};