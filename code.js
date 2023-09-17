var num =document.querySelectorAll(".drum").length
 
for(var i=0;i<num;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       // alert("clicked")
       var btn= this.innerHTML

       switch(btn){
        case 'Tome1':  var audio=new Audio("tom-1.mp3")  //mini 4\sounds\tom-1.mp3
        audio.play();
        break;
        case 'Tome2':  var audio=new Audio("tom-2.mp3")
        audio.play();
        break;
        case 'Tome3':  var audio=new Audio("tom-3.mp3")
        audio.play();
        break;
        case 'Tome4':  var audio=new Audio("tom-4.mp3")
        audio.play();
        break;
        case 'Snare':  var audio=new Audio("snare.mp3")
        audio.play();
        break;
        case 'Crash':  var audio=new Audio("crash.mp3")
        audio.play();
        break;
        case 'Kick-bass':  var audio=new Audio("Kick-bass.mp3")
        audio.play();
        break;
       }
       

     })
  }
  document.addEventListener("keypress",function (e) {
    var key = e.key.toLowerCase()
    switch(key){
        case 'Tome1':  var audio=new Audio("tom-1.mp3")  //
        audio.play();
        break;
        case 'Tome2':  var audio=new Audio("tom-2.mp3")
        audio.play();
        break;
        case 'Tome3':  var audio=new Audio("tom-3.mp3")
        audio.play();
        break;
        case 'Tome4':  var audio=new Audio("tom-4.mp3")
        audio.play();
        break;
        case 'Snare':  var audio=new Audio("snare.mp3")
        audio.play();
        break;
        case 'Crash':  var audio=new Audio("crash.mp3")
        audio.play();
        break;
        case 'Kick-bass':  var audio=new Audio("Kick-bass.mp3")
        audio.play();
        break;
        default:
            console.log(e.key)
       }
  })