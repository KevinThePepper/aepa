/*
 * Library for parsing emails, obtaining host and alert information, and algorithms
 * for determining responses.
 */

import Debug from "../util/debug";
import { parseEmail } from "../util/email";

export var config = {
    'debug': true
};

export function init() {
    Debug.info('Initializing Aviaso parsing application.');
    return JSON.stringify(parseEmail(Office.context.mailbox.item));
}
