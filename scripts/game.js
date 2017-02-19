var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    

    

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var ball1 = Bodies.rectangle(400, 200, 80, 80);
var ball2 = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

//move ball1
var mouseconstr = Matter.MouseConstraint.create(engine, Bodies);

//if(mouseconstr.ball1)
//{
	//Matter.Body.applyForce(ball1, 500, 20);
//}

// add all of the bodies to the world
World.add(engine.world, [ball1, ball2, ground]);


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);