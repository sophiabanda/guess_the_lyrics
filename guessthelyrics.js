const rl = require("readline-sync");
const { _1999, What_I_Got, Bohemian } = require("./constant");
const { randomizeQuestions, parseString } = require("./utils");

let points = 100;

const correctAnswer = () => {
  points += 250;
  console.log(
    `The talent!! You have ${points} points! Let's go again!`
  );
};

const incorrectAnswer = () => {
  points -= 250;
  console.log("Nope, didn't get it. You're losing some points. Let's move on.");
  console.log(`Your points not stand at ${points}`);
  if (points < 0) console.log("Yikes, you're not great at this.");
};

const rules = () => {
  console.log(`You're going to get three chances to get your answer right.\n
   For each correct answer, you will be awarded 250 points. For every wrong\n
   asnwer, you'll lose 150 points. If you don't know the song and want to skip\n 
   you may after your first attempt for the price of 50 points. You begin the game with 100 points. Let's go!`);
};

const endOfGame = () => {
  if (points > 750) {
    console.log(`You've beat the game with a score of ${points}!!!! CONGRATULATIONS!!`);
  } else if (points >= 500 && points <= 750) {
    console.log(`You have the potential to score more points in the future, but you're still a winner with ${points}!!`);
  } else if (points >= 499 && points <= 250) {
    console.log("You don't suck, but you can do better. Congrats!");
  } else {
    console.log("Wommp, wooommp, woooooommmp.");
  }
};

const gameOver = () => {
  const playAgain = rl.keyInYN("Game over!!! Would you like to play again?");
  if (playAgain) {
    game(true);
  } else {
    console.log(
      `Thanks for playing, hope to see you back soon! ${String.fromCodePoint(
        0x1f618
      )}`
    );
    process.exit();
  }
};

const generateQuestions = () => {
  const questions = [
    {
      introQuestion: () =>
      console.log(
        "The popular song 'I Get Around' by Tupac Shakur was released in 1993. Can you guess these missing lyrics?"
      ),
      lyrics: () => rl.question(I_Get_Around),
      solution: "I don't want it if it's that easy."
    },
    {
      introQuestion: () =>
        console.log(
          "'1999' by Prince was released in 1982.  See if you can fill in these missing lyrics."
        ),
      lyrics: () => rl.question(_1999),
      solution: "parties weren't meant to last"
    },
    {
      introQuestion: () =>
        console.log(
          "'Bohemian Rhapsody' by Queen was released in 1975. See if you can fill in these popular missing lyircs."
        ),
      lyrics: () => rl.question(Bohemian),
      solution: "thunderbolt and lightning"
    },
    {
      introQuestion: () =>
        console.log(
          "'What I Got' by Sublime was released in 1996. Fill in these blanks for another 250 points!"
        ),
      lyrics: () => rl.question(What_I_Got),
      solution: "light me up that cigarette"
    }
  ];
  return randomizeQuestions(questions);
};

function game(replay) {
  points = 100;
  if (replay) {
    console.log("******* Great! Let's go again!");
  } else {
    const intro = rl.keyInYN(
      "******** Welcome to 'Guess The Lyrics'! Are you ready to play?! ********"
    );
    if (!intro) {
      console.log("Oh bummer, thanks for stopping by!");
      return process.exit();
    }
    rules();
  }
  const questions = generateQuestions();
  questions.forEach(question => {
    if (points < 0) return gameOver();
    question.introQuestion();
    const input = question.lyrics();
    console.log("\n");
    const isRight = parseString(input) === parseString(question.solution);
    if (isRight) {
      correctAnswer();
    } else {
      console.log(
        "Would you like another shot, or would you like to skip this song?"
      );
      console.log("1 - Try Again\n 2 - Skip");
      const tryAgain = rl.question("1 | 2: ");
      if (tryAgain === "1") {
        const input = question.lyrics();
        const isRight = parseString(input) === parseString(question.solution);
        isRight ? correctAnswer() : incorrectAnswer();
      }
      if (tryAgain === "2") {
        points -= 50
      }
    }
    rl.question("Press enter to continue");
  });
  if (points > 0) endOfGame();
}

game();

