import { config } from "../aviaso/aviaso";

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
     * @param trace Whether or not to print a stack trace. Default is false.
     */
    static debug(message, trace=false) {
        if(config.debug) {
            let cMessage = Debug.formattedMessage(message, LEVEL_DEBUG);
            if (!trace) {
                console.debug(cMessage);
            } else {
                console.trace(cMessage);
            }
        }
    };

    /**
     * Prints an info message to the console.
     * @param message The info message.
     * @param trace Whether or not to print a stack trace. Default is false.
     */
    static info(message, trace=false) {
        if(config.debug) {
            let cMessage = Debug.formattedMessage(message, LEVEL_INFO);
            if (!trace) {
                console.info(cMessage);
            } else {
                console.trace(cMessage);
            }
        }
    };

    /**
     * Prints a warning message to the console.
     * @param message The warning message.
     * @param trace Whether or not to print a stack trace. Default is false.
     */
    static warn(message, trace=false) {
        if(config.debug) {
            let cMessage = Debug.formattedMessage(message, LEVEL_WARN);
            if (!trace) {
                console.warn(cMessage);
            } else {
                console.trace(cMessage);
            }
        }
    };

    /**
     * Prints an error message to the console.
     * @param message The error message.
     * @param trace Whether or not to print a stack trace. Default is false.
     */
    static error(message, trace=false) {
        if(config.debug) {
            let cMessage = Debug.formattedMessage(message, LEVEL_ERROR);
            if (!trace) {
                console.error(cMessage);
            } else {
                console.trace(cMessage);
            }
        }
    };

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
}
