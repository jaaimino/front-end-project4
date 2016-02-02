var controllers = {}

function addController(name, controller){
    console.log(name)
    controllers[name] = controller;
}

function getController(name){
    return controllers[name];
}

function getControllers(){
    return controllers;
}