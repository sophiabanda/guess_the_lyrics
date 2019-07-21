const rl = require("readline-sync");
const { _1999, What_I_Got, Bohemian } = require("./constant");
const { randomizeQuestions } = require("./utils");

let points = 100;

const correctAnswer = () => {
  points += 250;
  console.log(
    `You're amazing! You have ${points} Flex your skills again, let's go!`
  );
};

const incorrectAnswer = () => {
  points -= 150;
  console.log("Nope, didn't get it. You're losing some points. Let's move on.");
  console.log(`Your points not stand at ${points}`);
  if (point < 0) console.log("Yikes, you're not great at this.");
};

const secondTry = () => {
  console.log(
    "This is your second try, you only get one more after this, make it count."
  );
};

const rules = () => {
  console.log(`You're going to get three chances to get your answer right.\n
   For each correct answer, you will be awarded 250 points. For every wrong\n
   asnwer, you'll lose 150 points. If you don't know the song and want to skip\n 
   you may after your first attempt for the price of 50 points. `);
};

const generateQuestions = () => {
  const questions = [
    {
      introQuestion: () =>
        console.log(
          "'1999' by Prince was released in 1982.  See if you can fill in these missing lyrics."
        ),
      lyrics: () => rl.question(_1999)
    },
    {
      introQuestion: () =>
        console.log(
          "'Bohemian Rhapsody' by Queen was released in 1975. See if you can fill in these popular missing lyircs."
        ),
      lyrics: () => rl.question(Bohemian)
    },
    {
      introQuestion: () =>
        console.log(
          "'What I Got' by Sublime was released in 1996. Fill in these blanks for another 250 points!"
        ),
      lyrics: () => rl.question(What_I_Got)
    }
  ];
  return randomizeQuestions(questions);
};

const game = () => {
  const intro = rl.keyInYN(
    "******** Welcome to 'Guess The Lyrics'! Are you ready to play?! y or n ? ********"
  );
  if (!intro) {
    console.log("Oh bummer, thanks for stopping by!");
    return process.exit();
  }
  rules();
  const questions = generateQuestions();
  questions.forEach(question => {
    question.introQuestion();
    const input = question.lyrics();
  });
};

game()

//   console.log("Great, let's go!");

//   let song1 = rl.question(
//     "'1999' by Prince in 1982.  See if you can fill in the missing lyrics." +
//       "I was dreamin' when I wrote this, so sue me if I go too fast." +
//       "But life is just a party and _______ _______ ______ __ ____" +
//       "War is all around us, my mind says prepare to fight" +
//       "So if I gotta die I'm gonna listen to my body tonight\n"
//   );
//   if (
//     song1 == "parties weren't meant to last" ||
//     song1 == "parties werent meant to last"
//   ) {
//     console.log("Nice! You're a pro! Let's move on to the next song!");
//     score++;
//     console.log(`Your score is ${score}`);
//     questionTwo();
//   } else {
//     console.log(
//       "Oops, that's not quite right. Try again, or move on to the next one?"
//     ); //ask to skip, or give another try
//   }

//   if (
//     song2 === "thunderbolts and lightning"
//   ) {
//     console.log("Nice! You're killin' it! Next!");
//     score++;
//     console.log(`Your score is ${score}`);
//     questionThree();
//   } else {
//     console.log(
//       "Aww man, that's not right. Try again, or skip?"
//     ); //ask to skip, or give another try
//   }
//   if (
//     song3 == "light me up that cigarette" ||
//     song3 == "Light me up that cigarette"
//   ) {
//     console.log("Nice! You're a pro! Let's move on to the next song!");
//     score++;
//     console.log(`Your score is ${score}`);
//     questionTwo();
//   } else {
//     console.log(
//       "Temporary setback. Try again, or skip?"
//     ); //ask to skip, or give another try
//   }
// }
