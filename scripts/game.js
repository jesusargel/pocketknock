var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;
 
 //Boolean isMoving = false;

 

// create an engine
var engine = Engine.create();


// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

function moving()
{
	if(ball1.isSleeping == false)
	{
		return false;
	}else
	{
		return true;
	}
}

// create two boxes and a ground
var ball1 = Bodies.circle(350, 300, 25, 25);
var ball2 = Bodies.circle(450, 300, 25, 25);
var ground = Bodies.rectangle(415, 610, 625, 60, { isStatic: true });
ground.restitution = 0.8;
var wallr = Bodies.rectangle(810,310,60, 425, { isStatic: true});
wallr.restitution = 0.8;
var walll = Bodies.rectangle(0,310,60, 425, { isStatic: true});
walll.restitution = 0.8;
var ceil = Bodies.rectangle(415,0,625, 60, { isStatic: true});
ceil.restitution = 0.8;


//move ball1
 // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {

                    visible: false
                }
            }
        });
/*
    while(moving() == true)
    {

    	World.remove(engine.world, mouseConstraint);
    }
*/
    // keep the mouse in sync with rendering
    render.mouse = mouse;
//var pl1x = World.ball1.getBoundingClientRect();
document.onkeydown = function(e) {
  r = r || event
  if (r.keyCode == 'r') { // escape
   	Matter.Bodies.setPostition(ball1, [350, 450]);
   	Matter.Bodies.setPostition(ball2, [450, 450]);
}
}


engine.world.gravity.y = 0;
// add all of the bodies to the world
World.add(engine.world, [ball1, ball2, ground, wallr, walll, ceil,mouseConstraint]);


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);