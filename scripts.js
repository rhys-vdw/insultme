
var randomStringsPrefix = ["lazy", "poopy", "unsightly", "uptight", "screeching", "cumbersome", "dysfunctional", "bewildered", "stupid", "timid", "cheeky", "skeletal", "belligerent", "manky", "fartfaced", "moronic", "incompetent", "slimy", "smelly", "pompous","dicknosed", "butterfaced", "creepy", "flatulent", "dorky", ]
var randomStringsNoun = ["poo", "douche", "arse", "fecal", "turd", "rectum","cock","butt", "shit","crotch", "turd", "prick", "taint", "twat", "boner", "shart", "dong", "slobber",]
var randomStringsSuffix = ["pilot", "canoe", "captain", "sherriff", "pirate","hammer","knob", "box", "jockey","nazi","waffle", "goblin", "blossum","biscuit", "canoe", "clown", "socket", "monster", "hound", "dragon", "balloon", ]


function randomcolour(){
	var text = document.getElementById("test");
	text.style.color='#' + Math.random().toString(16).substring(4);
}

function randomcolourbackground(){
	document.body.style.backgroundColor ='#' + Math.random().toString(16).substring(4);
}

function entercheck(event){
        if (event.which == 13 || event.keyCode == 13) {
            insultme();
           return false;
        }
       return true;
 }


function insultme(){
	var name = document.getElementById("input").value;
	displayinsult(name);
	randomcolour();
	randomcolourbackground();
	updatetext();
		
}


function updatetext(){
	document.getElementById("insulttext").innerHTML="PATHETIC, INSULT ME AGAIN!";
}

function displayinsult(name){
	document.getElementById("test").innerHTML="You're a "+ getrandomprefix() +" "+ getrandomnoun()+ "-"+ getrandomsuffix()+", " +name+ "!";
}

function getrandomprefix(){
	randomIndex = Math.ceil((Math.random()*randomStringsPrefix.length-1));
    newText = randomStringsPrefix[randomIndex];
    return newText;
}

function getrandomnoun(){
	randomIndex = Math.ceil((Math.random()*randomStringsNoun.length-1));
    newText = randomStringsNoun[randomIndex];
    return newText;
}

function getrandomsuffix(){
	randomIndex = Math.ceil((Math.random()*randomStringsSuffix.length-1));
    newText = randomStringsSuffix[randomIndex];
    return newText;
}
