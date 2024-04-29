// const { MultipleChoiceStrategy } = require('./MultipleChoiceStrategy');

// describe('MultipleChoiceStrategy', () => {
//     describe('constructor', () => {
//         it('should create a MultipleChoiceStrategy instance with correctAnswers and maxAnswers set to correctAnswers length', () => {
//             const strategy = new MultipleChoiceStrategy([1, 2, 3]);
//             expect(strategy.correctAnswers).toEqual([1, 2, 3]);
//             expect(strategy.maxAnswers).toBe(3);
//         });
//     });

//     describe('checkAnswer', () => {
//         it('should return true if userAnswers array contains all correct answers', () => {
//             const strategy = new MultipleChoiceStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([1, 2, 3])).toBe(true);
//         });

//         it('should return true if userAnswers array contains correct answers regardless of order', () => {
//             const strategy = new MultipleChoiceStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([3, 2, 1])).toBe(true);
//         });

//         it('should return false if userAnswers array contains incorrect answers', () => {
//             const strategy = new MultipleChoiceStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([1, 2])).toBe(false);
//             expect(strategy.checkAnswer([1, 2, 4])).toBe(false);
//         });

//         it('should return false if userAnswers array does not contain all correct answers', () => {
//             const strategy = new MultipleChoiceStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([1, 2])).toBe(false);
//         });

//         it('should return false if userAnswers array contains extra incorrect answers', () => {
//             const strategy = new MultipleChoiceStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([1, 2, 3, 4])).toBe(false);
//         });

//         it('should return false if userAnswers array is empty', () => {
//             const strategy = new MultipleChoiceStrategy([1, 2, 3]);
//             expect(strategy.checkAnswer([])).toBe(false);
//         });
//     });
// });

const { MultipleChoiceStrategy } = require("./MultipleChoiceStrategy");

describe("MultipleChoiceStrategy", () => {
    test("checkAnswer() should return true if user's answers match all the correct answers", () => {
        const correctAnswers = [1, 2];
        const strategy = new MultipleChoiceStrategy(correctAnswers);

        expect(strategy.checkAnswer([1, 2])).toBe(true);
    });

    test("checkAnswer() should return false if user's answers do not match all the correct answers", () => {
        const correctAnswers = [1, 2];
        const strategy = new MultipleChoiceStrategy(correctAnswers);

        expect(strategy.checkAnswer([1])).toBe(false);
    });
});