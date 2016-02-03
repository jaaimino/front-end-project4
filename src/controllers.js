var controllers = {}

function addController(name, controller){
    controllers[name] = controller;
}

function getController(name){
    return controllers[name];
}

function getControllers(){
    return controllers;
}