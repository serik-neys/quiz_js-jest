// const { MultipleCorrectAnswersStrategy } = require('./MultipleCorrectAnswersStrategy');

// describe('MultipleCorrectAnswersStrategy', () => {
//     describe('constructor', () => {
//         it('should create a MultipleCorrectAnswersStrategy instance with correctAnswers and maxAnswers set correctly', () => {
//             const strategy = new MultipleCorrectAnswersStrategy([1, 2, 3]);
//             expect(strategy.correctAnswers).toEqual([1, 2, 3]);
//             expect(strategy.maxAnswers).toBe(1);
//         });
//     });

//     describe('checkAnswer', () => {
//         it('should return true if userAnswers array contains one of the correct answers', () => {
//             const strategy = new MultipleCorrectAnswersStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([1])).toBe(true);
//             expect(strategy.checkAnswer([2])).toBe(true);
//             expect(strategy.checkAnswer([3])).toBe(true);
//         });

//         it('should return false if userAnswers array contains more than one answer', () => {
//             const strategy = new MultipleCorrectAnswersStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([1, 2])).toBe(false);
//             expect(strategy.checkAnswer([1, 2, 3])).toBe(false);
//         });

//         it('should return false if userAnswers array contains incorrect answers', () => {
//             const strategy = new MultipleCorrectAnswersStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([4])).toBe(false);
//             expect(strategy.checkAnswer([1, 4])).toBe(false);
//         });

//         it('should return false if userAnswers array is empty', () => {
//             const strategy = new MultipleCorrectAnswersStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([])).toBe(false);
//         });
//     });
// });

const { MultipleCorrectAnswersStrategy } = require("./MultipleCorrectAnswersStrategy");

describe("MultipleCorrectAnswersStrategy", () => {
    test("checkAnswer() should return true if user's answer matches one of the correct answers", () => {
        const correctAnswers = [1, 2];
        const strategy = new MultipleCorrectAnswersStrategy(correctAnswers);

        expect(strategy.checkAnswer([1])).toBe(true);
    });

    test("checkAnswer() should return false if user's answer does not match any of the correct answers", () => {
        const correctAnswers = [1, 2];
        const strategy = new MultipleCorrectAnswersStrategy(correctAnswers);

        expect(strategy.checkAnswer([3])).toBe(false);
    });
});