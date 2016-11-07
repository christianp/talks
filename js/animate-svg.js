var recipe = document.querySelector('#recipe');
// get elements
var horse = recipe.querySelector('#horse');
var mic = recipe.querySelector('#mic');
var soundcard = recipe.querySelector('#soundcard');
var pi = recipe.querySelector('#pi');
var battery = recipe.querySelector('#battery');
var button = recipe.querySelector('#button');
var breadboard = recipe.querySelector('#breadboard');
var soundcard2mic = recipe.querySelector('#soundcard-to-mic');
var button2pi = recipe.querySelector('#button-to-pi');
var button2breadboard = recipe.querySelector('#button-to-breadboard');
var battery2pi = recipe.querySelector('#battery-to-pi');
var pi2breadboard = recipe.querySelector('#pi-to-breadboard');
var breadboard2horse = recipe.querySelector('#breadboard-to-horse');

// initial state
var t = new TimelineMax();
t.to([soundcard2mic,button2pi,button2breadboard,battery2pi,pi2breadboard,breadboard2horse],0,{opacity:0});
t.to(mic,0,{x:'+=1000px'});
t.to(soundcard,0,{x:'+=1000px'});
t.to(breadboard,0,{y:'-=500px'});
t.to(button,0,{x:'-=1000px'});
t.to(battery,0,{x:'-=400px'});
t.to(pi,0,{y:'+=1000px'});

// bring pi in
t.to(pi,1,{y:'-=1000px',delay:2});
t.to(breadboard,1,{y:'+=500px',delay:0.5});
t.staggerTo([pi2breadboard,breadboard2horse],0.5,{opacity:1},0.5);
t.to(battery,1,{x:'+=400px',delay:0.5});
t.to(battery2pi,0.5,{opacity:1});
t.to(soundcard,1,{x:'-=1000px',delay:0.5});
t.to(mic,1,{x:'-=1000px'});
t.to(soundcard2mic,0.5,{opacity:1});
t.to(button,1,{x:'+=1000px',delay:0.5});
t.staggerTo([button2pi,button2breadboard],0.5,{opacity:1},0.5);

t.seek(0.01);

var horse_timeline = t;
