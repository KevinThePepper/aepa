import { config } from "../aviaso/aviaso";

// const fs = require('fs');

const LEVEL_DEBUG = 'DEBUG';
const LEVEL_INFO = 'INFO';
const LEVEL_WARN = 'WARNING';
const LEVEL_ERROR = 'ERROR';

/**
 * Debugger utility that prints formatted messages to the debugger
 *
 * @author Kevin Shelley (kevin.shelley@honeywell.com)
 * @version 1.0.1
 */
export default class Debug {
    /**
     * Prints a debug message to the console.
     * @param message The debug message.
     */
    static debug(message) {
        Debug.log(message, LEVEL_DEBUG)
    }

    /**
     * Prints an info message to the console.
     * @param message The info message.
     */
    static info(message) {
        Debug.log(message, LEVEL_INFO)
    }

    /**
     * Prints a warning message to the console.
     * @param message The warning message.
     */
    static warn(message) {
        Debug.log(message, LEVEL_WARN);
    }

    /**
     * Prints an error message to the console.
     * @param message The error message.
     */
    static error(message) {
        Debug.log(message, LEVEL_ERROR);
    }

    /**
     * Returns a message formatted as:
     *  <LOG LEVEL> [<DATE IN ISO FORMAT>] - MESSAGE
     * @param message The log message.
     * @param level The level of the log message as a string.
     * @returns {string} The formatted message.
     */
    static formattedMessage(message, level) {
        const date = new Date().toISOString();
        return level + ' [' + date + '] - ' + message;
    }

    /**
     * Prints a message with a specified log level to the console and as a new entry
     * to the log file. If no log level is specified, the level defaults to 'INFO'
     * @param message The debug message
     * @param level The console log level, default is INFO
     */
    static log(message, level=LEVEL_INFO) {
        let cMessage = Debug.formattedMessage(message, level);
        // print to console if debugging is
        if(config.DEBUG) {
            console[level.toLocaleLowerCase()](cMessage);
        }

        // then print to the log file if the error level is above debug
        /*
        if(level !== LEVEL_DEBUG) {
            fs.appendFileSync(config.LOG_FILE, cMessage);
        }
        */
    }
}
