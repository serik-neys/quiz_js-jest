// const { OutputManager } = require('./OutputManager');

// describe('OutputManager', () => {
//     let outputManager;

//     beforeEach(() => {
//         outputManager = new OutputManager();
//         // Mock console.log
//         console.log = jest.fn();
//     });

//     describe('display', () => {
//         it('should display message in default color if no color is provided', () => {
//             const message = 'Hello, world!';
//             outputManager.display(message);
//             expect(console.log).toHaveBeenCalledWith(message);
//         });

//         it('should display message in red color if color is "red"', () => {
//             const message = 'Error: Something went wrong!';
//             outputManager.display(message, 'red');
//             expect(console.log).toHaveBeenCalledWith("\x1b[31m%s\x1b[0m", message);
//         });

//         it('should display message in green color if color is "green"', () => {
//             const message = 'Success: Task completed!';
//             outputManager.display(message, 'green');
//             expect(console.log).toHaveBeenCalledWith("\x1b[32m%s\x1b[0m", message);
//         });

//         // Add more test cases to cover all possible color options and edge cases
//     });
// });


const { OutputManager } = require("./OutputManager");

describe("OutputManager", () => {
    let outputManager;

    beforeEach(() => {
        outputManager = new OutputManager();
    });

    test("display() should display message in default color", () => {
        const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();

        outputManager.display("Test message");

        expect(mockConsoleLog).toHaveBeenCalledWith("Test message");

        mockConsoleLog.mockRestore();
    });

    test("display() should display message in red color", () => {
        const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();

        outputManager.display("Test message", "red");

        expect(mockConsoleLog).toHaveBeenCalledWith("\x1b[31m%s\x1b[0m", "Test message");

        mockConsoleLog.mockRestore();
    });

    test("display() should display message in green color", () => {
        const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();

        outputManager.display("Test message", "green");

        expect(mockConsoleLog).toHaveBeenCalledWith("\x1b[32m%s\x1b[0m", "Test message");

        mockConsoleLog.mockRestore();
    });
});