// const { SingleAnswerStrategy } = require('./SingleAnswerStrategy');

// describe('SingleAnswerStrategy', () => {
//     describe('constructor', () => {
//         it('should throw an error if correctAnswers array length is not exactly 1', () => {
//             expect(() => {
//                 new SingleAnswerStrategy([]);
//             }).toThrowError('SingleAnswerStrategy requires exactly 1 answer, got 0');

//             expect(() => {
//                 new SingleAnswerStrategy([1, 2]);
//             }).toThrowError('SingleAnswerStrategy requires exactly 1 answer, got 2');
//         });

//         it('should create a SingleAnswerStrategy instance with correctAnswers and maxAnswers set to 1', () => {
//             const strategy = new SingleAnswerStrategy([1]);
//             expect(strategy.correctAnswers).toEqual([1]);
//             expect(strategy.maxAnswers).toBe(1);
//         });
//     });

//     describe('checkAnswer', () => {
//         it('should return true if userAnswers array length is exactly 1 and matches correct answer', () => {
//             const strategy = new SingleAnswerStrategy([42]);
//             expect(strategy.checkAnswer([42])).toBe(true);
//         });

//         it('should return false if userAnswers array length is not exactly 1', () => {
//             const strategy = new SingleAnswerStrategy([42]);
//             expect(strategy.checkAnswer([])).toBe(false);
//             expect(strategy.checkAnswer([42, 43])).toBe(false);
//         });

//         it('should return false if userAnswers array length is exactly 1 but does not match correct answer', () => {
//             const strategy = new SingleAnswerStrategy([42]);
//             expect(strategy.checkAnswer([43])).toBe(false);
//         });
//     });
// });

const { SingleAnswerStrategy } = require("./SingleAnswerStrategy");

describe("SingleAnswerStrategy", () => {
    test("checkAnswer() should return true if user's answer matches the correct answer", () => {
        const correctAnswer = [1];
        const strategy = new SingleAnswerStrategy(correctAnswer);

        expect(strategy.checkAnswer([1])).toBe(true);
    });

    test("checkAnswer() should return false if user's answer does not match the correct answer", () => {
        const correctAnswer = [1];
        const strategy = new SingleAnswerStrategy(correctAnswer);

        expect(strategy.checkAnswer([2])).toBe(false);
    });
});