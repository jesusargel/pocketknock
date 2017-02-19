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
var ball1 = Bodies.circle(400, 200, 25, 25);
var ball2 = Bodies.circle(450, 50, 25, 25);
var ground = Bodies.rectangle(400, 610, 690, 60, { isStatic: true });
var wallr = Bodies.rectangle(810,300,60, 500, { isStatic: true});
var walll = Bodies.rectangle(0,400,60, 690, { isStatic: true});
var ceil = Bodies.rectangle(400,0,690, 60, { isStatic: true});

//move ball1
var mouseconstr = Matter.MouseConstraint.create(engine, Bodies);

//if(mouseconstr.ball1)
//{
	//Matter.Body.applyForce(ball1, 500, 20);
//}

// add all of the bodies to the world
World.add(engine.world, [ball1, ball2, ground, wallr, walll, ceil]);


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);