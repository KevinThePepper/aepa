import Debug from "../util/debug";
import User from '../aviaso/user';
import ServiceAlert from '../aviaso/serviceAlert';
/**
 * Breaks an email down into components and returns the result of the parse in a
 * js dictionary.
 * @param {Office.context.mailbox.item} item The email object
 */
export function parseEmail(item) {
    let email = getEmail(item);
    const parsedEmail = {
        'id': email.id,
        'internetMessageId': email.internetMessageId,
        'to': email.entities.EmailAddresses,
        'from': email.from,
        'subject': email.subject,
        'body': item.body,
        'user': new User(email.userDisplayName, email.userEmailAddress, email.userTimeZone),
        'dateTime': {
            'created': new Date(email.dateTimeCreated),
            'modified': new Date(email.dateTimeCreated),
            'sent': new Date(email.dateTimeSent),
        },
        'urls': email.entities.Urls,
        'itemType': email.itemType,
        'error': email.error
    };
    return new ServiceAlert(parsedEmail);
}

/**
 * Hack for obtaining the email information as a JSON.
 * @param {Office.context.mailbox.item} item The email item.
 * @returns {*} The email item as a JSON.
 */
function getEmail(item) {
    return JSON.parse(JSON.stringify(item))._data$p$0._data$p$0;
}
