var introTXT = document.getElementById('introTXT');

setTimeout(function(){
    introTXT.style.opacity = 1;
},500);
setTimeout(function(){
    introTXT.style.opacity = 0;
},3500)
setTimeout(function(){
    document.getElementById('IntroPage').style.display = "none";
    document.getElementById('loadingPage').style.display = "block";
},5200);
setTimeout(function(){
    document.getElementById('loadingPage').style.display = "none";
    document.getElementById('mainPage').style.display = "block";
},7700);