'use strict';
var name = prompt ("what is your name?");
console.log(name);
alert (`Welcome to my website ${name} you can know about me more in this website`);
alert (name);
var myGender = prompt ("Do you think i'm a girl ?");
var myGender1 = myGender.toLowerCase();

if (myGender1 === 'yes' || myGender1 === 'y'){
   // console.log("Do you think i'm a girl ?" , myGender);
    alert('Yes Im a girl' );
}else if (myGender1 === 'no' || myGender1 === 'n'){
    //console.log("Do you think i'm a girl ?" , myGender);
    alert('No Im not a boy' );
}else{
    alert('Choose yes or no' );
    myGender = prompt ("Do you think i'm a girl ?");
}



var myName = prompt ("Do you think Fatima is my name ?");
 myName = myName.toLowerCase();

if (myName === 'yes' || myName === 'y'){
   // console.log("Do you think Fatima is my name ?" , myName);
    alert('Yes my name is fatima' );
}else if (myName === 'no' || myName === 'n'){
    //console.log("Do you think Fatima is my name ?" , myName);
    alert( 'No my name is fatima' );
}else{
    alert('Choose yes or no' );
    myName = prompt ("Do you think Fatima is my name ?");
}


var myAge = prompt ("Do you think  my age is 24?");
 myAge = myAge.toLowerCase();
if (myAge === 'yes' || myName === 'y'){
    //console.log("Do you think  my age is 24?" , myAge);
    alert('Yes my age is 25' );
}else if (myAge === 'no' || myAge === 'n'){
    //console.log("Do you think  my age is 24?" , myAge);
    alert('No my age is 24' );
}else{
    alert('Choose yes or no' );
    myAge = prompt ("Do you what is my age is 24?");
}

var myFavDrin = prompt ("Do you think my fav drink is Coffee?");
myFavDrin = myFavDrin.toLowerCase();

if (myFavDrin === 'yes' || myFavDrin === 'y'){
    //console.log("Do you think my fav drink is Coffee?" , myFavDrin);
    alert('Yes my fav drink is coffee' );
}else if (myFavDrin === 'no' || myFavDrin === 'n'){
    //console.log("Do you think my fav drink is Coffee?" , myFavDrin);
    alert('No my fav drink is coffee' );
}  else{
    alert('Choose yes or no' );
    myFavDrin = prompt ("Do you think my fav drink is Coffee?");
}

var myFavPet = prompt ("Do you think my fav pet is Cat?");
 myFavPet = myFavPet.toLowerCase();

if (myFavPet === 'yes' || myFavPet === 'y'){
    //console.log("Do you think my fav pet is Cat?" , myFavPet);
    alert('Yes my fav pet is cat' );
}else if (myFavPet === 'no' || myFavPet === 'n'){
    //console.log("Do you think my fav pet is Cat?" , myFavPet);
    alert('No my fav pet is cat' );
}else{
    
    alert('Choose yes or no' );
    myFavDrin = prompt ("Do you think my fav pet is Cat?");
}
 
alert (`thank you for answer my Questions ${name} you can know more read the pargraph`);
