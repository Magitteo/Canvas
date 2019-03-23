window.onload = function (){
        var canvas = document.getElementById ("canvas"),
            context = canvas.getContext ("2d"), 
            width = canvas.width = window.innerWidth,
            height = canvas.height = window.innerHeight,
            particles = [],
            numParticles = 150,
            gravity = vector.create (0, 0.1);
    
        for (var i = 0; i<numParticles; i += 1 ){
            particles.push (particle.create (width/2, height/3, Math.random() * 5 + 2, Math.random() * Math.PI * 2 ));
        }

        update ();
    
        function update (){
            context.clearRect (0,0,width, height);
            for (var i = 0; i < numParticles; i += 1){ 
                var p = particles [i];

                p.accelerate (gravity);
                p.update();
                // context.fillStyle = 'rgb(color[0], color[1], color[2])';
                context.fillStyle = "#FA0A10";

                context.beginPath();
                context.arc (p.position.getX(), p.position.getY(), 4, 0, Math.PI*2, false);
                context.fill();
                }
                
            requestAnimationFrame (update);
    
            }   
        
    };
    