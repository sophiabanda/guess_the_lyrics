const readlineSync = require("readline-sync");

let score = 0;
let tries = 2;

questionTwo = () => {
  let song2 = readlineSync.question(
    "Our next song is “Bohemian Rhapsody” by Queen, which was released in 1975. See if you can fill in these missing lyrics:" +
      "I see a little silhouetto of a man" +
      "Scaramouch, Scaramouch will you do the Fandango" +
      "________ ___ ________ very very frightening me" +
      "Gallileo, Gallileo, Gallileo, Gallileo, Gallileo, figaro, magnifico"
  );
};

questionThree = () => {
  let song3 = readlineSync.question(
    "Early in the morning, risin' to the street" +
    "____ __ __ ____ _________ and I strap shoes on my feet" +
    "Got to find a reason, a reason things went wrong" +
    "Got to find a reason why my money's all gone" +
    "I got a dalmatian, and I can still get high" +
    "I can play the guitar like a motherfucking riot" 
  );
};

if (
  readlineSync.keyInYN(
    "******** Welcome to 'Guess The Lyrics'! Are you ready to play?! ********"
  )
) {
  console.log("Great, let's go!");

  let song1 = readlineSync.question(
    "'1999' by Prince in 1982.  See if you can fill in the missing lyrics." +
      "I was dreamin' when I wrote this, so sue me if I go too fast." +
      "But life is just a party and _______ _______ ______ __ ____" +
      "War is all around us, my mind says prepare to fight" +
      "So if I gotta die I'm gonna listen to my body tonight\n"
  );
  if (
    song1 == "parties weren't meant to last" ||
    song1 == "parties werent meant to last"
  ) {
    console.log("Nice! You're a pro! Let's move on to the next song!");
    score++;
    console.log(`Your score is ${score}`);
    questionTwo();
  } else {
    console.log(
      "Oops, that's not quite right. Try again, or move on to the next one?"
    ); //ask to skip, or give another try
  }

  if (
    song2 === "thunderbolts and lightning"
  ) {
    console.log("Nice! You're killin' it! Next!");
    score++;
    console.log(`Your score is ${score}`);
    questionThree();
  } else {
    console.log(
      "Aww man, that's not right. Try again, or skip?"
    ); //ask to skip, or give another try
  }
  if (
    song3 == "light me up that cigarette" ||
    song3 == "Light me up that cigarette"
  ) {
    console.log("Nice! You're a pro! Let's move on to the next song!");
    score++;
    console.log(`Your score is ${score}`);
    questionTwo();
  } else {
    console.log(
      "Temporary setback. Try again, or skip?"
    ); //ask to skip, or give another try
  }
}
