// const { QuizManager } = require('./QuizManager');

// // Mock OutputManager and InputReader
// const mockOutputManager = {
//     display: jest.fn(),
// };

// const mockInputReader = {
//     readAnswers: jest.fn(),
// };

// describe('QuizManager', () => {
//     let quizManager;
//     const questions = [
//         {
//             text: 'Question 1',
//             choices: ['Choice A', 'Choice B', 'Choice C'],
//             strategy: {
//                 checkAnswer: jest.fn(() => true),
//                 correctAnswers: [1],
//             },
//         },
//         {
//             text: 'Question 2',
//             choices: ['Choice X', 'Choice Y', 'Choice Z'],
//             strategy: {
//                 checkAnswer: jest.fn(() => false),
//                 correctAnswers: [3],
//             },
//         },
//     ];

//     beforeEach(() => {
//         quizManager = new QuizManager(questions, mockOutputManager, mockInputReader);
//     });

//     describe('startQuiz', () => {
//         it('should display the first question and wait for the answer', async () => {
//             await quizManager.startQuiz();
//             expect(mockOutputManager.display).toHaveBeenCalledWith('Question 1: Question 1');
//             expect(mockOutputManager.display).toHaveBeenCalledWith('1. Choice A');
//             expect(mockOutputManager.display).toHaveBeenCalledWith('2. Choice B');
//             expect(mockOutputManager.display).toHaveBeenCalledWith('3. Choice C');
//         });
//     });

//     describe('answerQuestion', () => {
//         it('should display "Correct!" if the answer is correct', async () => {
//             mockInputReader.readAnswers.mockResolvedValueOnce([1]);
//             await quizManager.answerQuestion();
//             expect(mockOutputManager.display).toHaveBeenCalledWith('Correct!\n', 'green');
//         });

//         it('should display "Incorrect!" if the answer is incorrect', async () => {
//             mockInputReader.readAnswers.mockResolvedValueOnce([2]);
//             await quizManager.answerQuestion();
//             expect(mockOutputManager.display).toHaveBeenCalledWith(expect.stringContaining('Incorrect!'), 'red');
//         });
        

//         it('should display "Quiz finished!" when all questions are answered', async () => {
//             mockInputReader.readAnswers.mockResolvedValueOnce([1]);
//             mockInputReader.readAnswers.mockResolvedValueOnce([3]);
//             await quizManager.startQuiz();
//             expect(mockOutputManager.display).toHaveBeenCalledWith('Quiz finished!');
//         });
//     });
// });


const { QuizManager } = require("./QuizManager");
const { OutputManager } = require("./OutputManager");
const { InputReader } = require("./InputReader");
const { Question } = require("./Question");

describe("QuizManager", () => {
    test("constructor() should create a QuizManager object with questions, outputManager, and inputReader", () => {
        const questions = [new Question("Question 1", ["Choice 1", "Choice 2"], { maxAnswers: 1 })];
        const outputManager = new OutputManager();
        const inputReader = new InputReader();

        const quizManager = new QuizManager(questions, outputManager, inputReader);

        expect(quizManager.questions).toEqual(questions);
        expect(quizManager.outputManager).toBe(outputManager);
        expect(quizManager.inputReader).toBe(inputReader);
        expect(quizManager.currentIndex).toBe(0);
    });

    test("startQuiz() should display the first question and await user's answer", async () => {
        const questions = [new Question("Question 1", ["Choice 1", "Choice 2"], { maxAnswers: 1 })];
        const outputManager = new OutputManager();
        const inputReader = new InputReader();
        const mockDisplayQuestion = jest.spyOn(QuizManager.prototype, "displayQuestion");
        const mockAnswerQuestion = jest.spyOn(QuizManager.prototype, "answerQuestion").mockResolvedValue();

        const quizManager = new QuizManager(questions, outputManager, inputReader);
        await quizManager.startQuiz();

        expect(mockDisplayQuestion).toHaveBeenCalled();
        expect(mockAnswerQuestion).toHaveBeenCalled();

        mockDisplayQuestion.mockRestore();
        mockAnswerQuestion.mockRestore();
    });
});