// const { Question } = require('./Question');

// describe('Question', () => {
//     describe('constructor', () => {
//         it('should create a Question instance with provided text, choices, and strategy', () => {
//             const text = 'What is the capital of France?';
//             const choices = ['Paris', 'London', 'Berlin', 'Madrid'];
//             const strategy = {
//                 correctAnswers: [1],
//                 checkAnswer: () => {},
//                 maxAnswers: 1
//             };

//             const question = new Question(text, choices, strategy);

//             expect(question.text).toBe(text);
//             expect(question.choices).toEqual(choices);
//             expect(question.strategy).toBe(strategy);
//         });
//     });
// });

const { Question } = require("./Question");

describe("Question", () => {
    test("constructor() should create a question object with text, choices, and strategy", () => {
        const text = "Test question";
        const choices = ["Choice 1", "Choice 2"];
        const strategy = { maxAnswers: 1 };

        const question = new Question(text, choices, strategy);

        expect(question.text).toBe(text);
        expect(question.choices).toEqual(choices);
        expect(question.strategy).toBe(strategy);
    });
});