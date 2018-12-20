// Rover Object Goes Here
// ======================
var Rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
console.log("current direction is: " + Rover.direction);
console.log("current coordinates of Rover: x " + Rover.x + ", y: " + Rover.y);
// ======================
function turnLeft(Rover){
  switch (Rover.direction) {
    case "N":
    Rover.direction = "W";
    break;
    case "S":
    Rover.direction = "E";
    break;
    case "E":
    Rover.direction = "N"
    break;
    case "W":
    Rover.direction = "S";
    break;
  }
  console.log("turnLeft was called!");
  console.log("Rover is now facing: " + Rover.direction);
}

function turnRight(Rover){
  switch (Rover.direction) {
    case "N":
    Rover.direction = "E";
    break;
    case "S":
    Rover.direction = "W";
    break;
    case "E":
    Rover.direction = "S"
    break;
    case "W":
    Rover.direction = "N";
    break;
  }
  console.log("turnRight was called!");
  console.log("Rover is now facing: " + Rover.direction);
}

function moveForward(Rover){
  if ( Rover.direction === "N") {
    Rover.y -= 1;
    Rover.travelLog.push("y: " + Rover.y + ", x: " + Rover.x + "; ");
  } else if (Rover.direction === "W") {
    Rover.x -= 1
    Rover.travelLog.push("x: " + Rover.x + ", y: " + Rover.y + "; ");
  } else if (Rover.direction === "S") {
    Rover.y += 1;
    Rover.travelLog.push("y: " +Rover.y + ", x: " + Rover.x + "; ");
  } else if (Rover.direction === "E") {
    Rover.x += 1;
    Rover.travelLog.push("x: " + Rover.x + ", y: " + Rover.y + "; ");
  }
  console.log("x: " + Rover.x + ", y: " + Rover.y);
  console.log("Rover travel log: " + Rover.travelLog);
}

function commandListner (command) {
  for ( var i = 0; i < command.length; i ++) {
    if (command[i] === "r") {
      turnRight(Rover);
    } else if (command[i] === "l") {
      turnLeft(Rover);
    } else if (command[i] === 'f') {
      moveForward(Rover);
    }
  }
  console.log("x: " + Rover.x + ", y: " + Rover.y);
  console.log("Rover is now facing: " + Rover.direction);
}
