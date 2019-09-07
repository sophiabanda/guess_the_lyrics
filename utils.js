const randomizeQuestions = array => array.sort(() => Math.random() - 0.5);
module.exports.randomizeQuestions = randomizeQuestions;
const parseString = string => string.toLowerCase().replace(/[\W_]+/g, "");
module.exports.parseString = parseString;
