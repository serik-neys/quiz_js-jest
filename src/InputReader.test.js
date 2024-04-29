// const readline = require("readline");
// const { InputReader } = require("./InputReader");

// describe('InputReader', () => {
//     let inputReader;

//     beforeEach(() => {
//         inputReader = new InputReader();
//     });

//     afterEach(() => {
//         inputReader.close();
//     });

//     describe('readAnswers', () => {
//         it('should return user answers as array of numbers for single answer question', async () => {
//             // Mocking readline.question method
//             inputReader.rl.question = jest.fn((query, callback) => {
//                 callback("1");
//             });

//             const question = { strategy: { maxAnswers: 1 }, choices: ['A', 'B', 'C'] };
//             const answers = await inputReader.readAnswers(question);
//             expect(answers).toEqual([1]);
//         });

//         it('should return user answers as array of numbers for multiple answers question', async () => {
//             // Mocking readline.question method
//             inputReader.rl.question = jest.fn((query, callback) => {
//                 callback("1,2");
//             });

//             const question = { strategy: { maxAnswers: 2 }, choices: ['A', 'B', 'C'] };
//             const answers = await inputReader.readAnswers(question);
//             expect(answers).toEqual([1, 2]);
//         });

        // it('should handle invalid input correctly', async () => {
        //     // Mocking readline.question method
        //     inputReader.rl.question = jest.fn((query, callback) => {
        //         callback("4"); // invalid choice
        //     });
        
        //     const question1 = { strategy: { maxAnswers: 1 }, choices: ['A', 'B', 'C'] };
        //     const answers1 = await inputReader.readAnswers(question1);
        //     expect(answers1).toEqual([]);
        
        //     inputReader.rl.question = jest.fn((query, callback) => {
        //         callback("1,2,5"); // two valid choices and one invalid
        //     });
        
        //     const question2 = { strategy: { maxAnswers: 3 }, choices: ['A', 'B', 'C'] };
        //     const answers2 = await inputReader.readAnswers(question2);
        //     expect(answers2).toEqual([1, 2]);
        // });

//     });
// });

const { InputReader } = require("./InputReader");
const readline = require("readline");

describe("InputReader", () => {
    let inputReader;

    beforeEach(() => {
        inputReader = new InputReader();
    });

    afterEach(() => {
        inputReader.close();
    });

    test("readAnswers() should return an array of user answers", async () => {
        const mockQuestion = {
            strategy: {
                maxAnswers: 1,
            },
        };

        const mockConsoleQuestion = jest.spyOn(readline.Interface.prototype, "question")
            .mockImplementation((query, callback) => {
                callback("1");
            });

        const answers = await inputReader.readAnswers(mockQuestion);

        expect(answers).toEqual([1]);

        mockConsoleQuestion.mockRestore();
    });
});