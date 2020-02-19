'use strict';
var mark =0 ;
function userName() {
    var name = prompt("what is your name?");
console.log(name);
alert(`Welcome to my website ${name} you can know about me more in this website`);
alert(name);
var myGender = prompt("Do you think i'm a girl ?");
var myGender1 = myGender.toLowerCase();

if (myGender1 === 'yes' || myGender1 === 'y') {
    // console.log("Do you think i'm a girl ?" , myGender);
    alert('Yes Im a girl');
    mark = mark + 1 ;
} else if (myGender1 === 'no' || myGender1 === 'n') {
    //console.log("Do you think i'm a girl ?" , myGender);
    alert('No Im not a boy');
} else {
    alert('Choose yes or no');
    myGender = prompt("Do you think i'm a girl ?");
}
}
userName();

function meName2(){
    var myName = prompt("Do you think Fatima is my name ?");
    myName = myName.toLowerCase();
    
    if (myName === 'yes' || myName === 'y') {
        // console.log("Do you think Fatima is my name ?" , myName);
        alert('Yes my name is fatima');
        mark = mark + 1 ;
    } else if (myName === 'no' || myName === 'n') {
        //console.log("Do you think Fatima is my name ?" , myName);
        alert('No my name is fatima');
    } else {
        alert('Choose yes or no');
        myName = prompt("Do you think Fatima is my name ?");
    }
}
meName2();

function meAge2 (){
    var myAge = prompt("Do you think  my age is 24?");
    myAge = myAge.toLowerCase();
    if (myAge === 'yes' || myAge === 'y') {
        //console.log("Do you think  my age is 24?" , myAge);
        alert('Yes my age is 24');
        mark = mark + 1 ;
    } else if (myAge === 'no' || myAge === 'n') {
        //console.log("Do you think  my age is 24?" , myAge);
        alert('No my age is 24');
    } else {
        alert('Choose yes or no');
        myAge = prompt("Do you what is my age is 24?");
    }
}
meAge2();

function myFavPDrin2(){
    
    var myFavDrin = prompt("Do you think my fav drink is Coffee?");
    myFavDrin = myFavDrin.toLowerCase();
    
    if (myFavDrin === 'yes' || myFavDrin === 'y') {
        //console.log("Do you think my fav drink is Coffee?" , myFavDrin);
        alert('Yes my fav drink is coffee');
        mark = mark + 1 
    } else if (myFavDrin === 'no' || myFavDrin === 'n') {
        //console.log("Do you think my fav drink is Coffee?" , myFavDrin);
        alert('No my fav drink is coffee');
    } else {
        alert('Choose yes or no');
        myFavDrin = prompt("Do you think my fav drink is Coffee?");
}
}
function myFavPet2(){

    var myFavPet = prompt("Do you think my fav pet is Cat?");
    myFavPet = myFavPet.toLowerCase();
    
    if (myFavPet === 'yes' || myFavPet === 'y') {
        //console.log("Do you think my fav pet is Cat?" , myFavPet);
        alert('Yes my fav pet is cat');
        mark = mark + 1 
    } else if (myFavPet === 'no' || myFavPet === 'n') {
        //console.log("Do you think my fav pet is Cat?" , myFavPet);
        alert('No my fav pet is cat');
    } else {
    
        alert('Choose yes or no');
        myFavDrin = prompt("Do you think my fav pet is Cat?");
    }
}
myFavPet2();
function q6(){

    for (var i = 0; i < 4; i++) {
        var number = prompt("I think in number between 1 and 40 do think you can guess it ? ")
        //console.log(number);
        if (number == 26) {
            alert('yes i am think in number 26');
            mark = mark + 1 
            break;
        } else if (number < 26) {
            alert('No its too low');
        } else if (number > 26) {
            alert('No its too high');
        }
    }
    if (i === 4) {
        alert('My Correct number is 26');
    }
}
q6();
function q7(){

    var favCar = ['bmw', 'honda', 'kia', 'mazda', 'hyndai', 'porscha'];
    for (var f = 0; f < 6; f++) {
        var favCar1 = prompt("What is my fav car ? ")
        //console.log(favCar1);
        favCar1 = favCar1.toLowerCase();
        var j  ;
        var count=0;
        for(j=0; j<favCar.length;j++){
            if(favCar[j]==favCar1){
                alert('yes i love it');
                mark = mark + 1 
                break;
            }else{
                count++;
                if (count == favCar.length){
                    alert('No i dont love it');
                }
            } 
        }
        if(count<favCar.length){
            break;  
        }
        /*if (favCar1 == favCar[0] || favCar1 == favCar[1] || favCar1 == favCar[2] || favCar1 == favCar[3] || favCar1 == favCar[4] || favCar1 == favCar[5]) {
            alert('yes i love it');
            mark = mark + 1 
            break;
        } else if (favCar1 !== favCar[0] || favCar1 !== favCar[1] || favCar1 !== favCar[2] || favCar1 !== favCar[3] || favCar1 !== favCar[4] || favCar1 !== favCar[5]) {
            alert('No i dont love it');
        }*/
    }

   // if(count<favCar.length){
        break;  
    //}
    /*if (favCar1 == favCar[0] || favCar1 == favCar[1] || favCar1 == favCar[2] || favCar1 == favCar[3] || favCar1 == favCar[4] || favCar1 == favCar[5]) {
        alert('yes i love it');
        mark = mark + 1 
        break;
    } else if (favCar1 !== favCar[0] || favCar1 !== favCar[1] || favCar1 !== favCar[2] || favCar1 !== favCar[3] || favCar1 !== favCar[4] || favCar1 !== favCar[5]) {
        alert('No i dont love it');
    }*/
}
if (f === favCar.length) {
    alert(`my favorite car are ${favCar}`);
    if (f === favCar.length) {
        alert(`my favorite car are ${favCar}`);
    }
}
q7();
alert (`you git this mark ${mark}`);
alert(`thank you for answer my Questions ${name} you can know more read the pargraph`);