var itemArray = [];
var wrong = "./sound/wrong.wav"
var pass = "./sound/bonus.wav"
var songIn = new Audio(pass)
var songOn = new Audio(wrong)
    function check(){
      var vale = collectValue.value;
      
      if(vale == ""){
        err.innerHTML = `<p class="alert alert-danger text-center">Space must be filled</p>`
        songOn.play();
      } else{
        err.innerHTML = ""
        display.innerHTML = ""
        itemArray.push(vale);
        collectValue.value = ""
        displayAll(); 
        songIn.play()
      }
    }

    function add(){
      var vale = collectValue.value;
      
      if(vale == ""){
        err.innerHTML = `<p class="alert alert-danger text-center">Space must be filled</p>`
        songOn.play();
      } else{
        err.innerHTML = "";
        display.innerHTML = ""
        itemArray.unshift(vale);
        collectValue.value = ""
        displayAll(); 
        songIn.play()
      }
    }

    function deleteLast(){
      songIn.play()
    err.innerHTML = "";
        itemArray.pop();
        displayAll(); 
    }

    function deleteFirst(){
      songIn.play()
      err.innerHTML = "";
      itemArray.shift();
      displayAll();
    }
    function deleteAny(){
      songIn.play()
      err.innerHTML = "";
      var userInput = Number( prompt("Enter a number to delete"))
        itemArray.splice(userInput-1,1);
        displayAll()
    }

    function editAny(){
      songIn.play()
      err.innerHTML = "";
      var userInput = Number( prompt("Enter a number to edit"));
      var userEdit = prompt("What do you want to edit it to?");
      itemArray[userInput-1] = userEdit;
        displayAll();
    }

    function deleteAll(){
      songIn.play()
      err.innerHTML = "";
        itemArray.splice(0);
        displayAll()
    }


    function displayAll(){
      display.innerHTML = ""
        for(i=0; i<itemArray.length; i++){
          display.innerHTML += `<h3> ${i+1}. ${itemArray[i]}</h3>`;
        }
      }