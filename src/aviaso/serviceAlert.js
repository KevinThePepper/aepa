/**
 *
 * Different components:
 * - Service - The type of service being monitored (i.e. Disk Usage, Memory Usage, etc)
 * - Alert Type - SERVICE or HOST
 * - Notification Type - PROBLEM, HOST, RECOVERY, DOWNTIMESTART, DOWNTIMEEND, FLAPPINGSTART, FLAPPNIGSTOP
 * - Host - The impacted host
 * - Status - Host (Up, Down, Unreachable, or Pending) and Service (Ok, Warning, Unknown, Critical, or Pending)
 * - Date Created - The date/time the alert was created through Nagios.
 * - Date Received - The date/time the email alert came in.
 */
import Debug from "../util/debug";

// host statuses
const HOST_STATUS_UP = 'UP';
const HOST_STATUS_DOWN = 'DOWN';
const HOST_STATUS_UNREACHABLE = 'UNREACHABLE';
const HOST_STATUS_PENDING = 'PENDING';

// service statuses
const SERVICE_STATUS_OK = 'OK';
const SERVICE_STATUS_WARNING = 'WARNING';
const SERVICE_STATUS_UNKNOWN = 'UNKNOWN';
const SERVICE_STATUS_CRITICAL = 'CRITICAL';
const SERVICE_STATUS_PENDING = 'PENDING';

// body component indexing
const NOTIFICATION_TYPE_INDEX = 9;
const SERVICE_INDEX = 11;
const HOST_INDEX = 12;
const ADDRESS_INDEX = 13;
const STATE_INDEX = 14;
const INFO_INDEX = 15;
const DATETIME_INDEX = 16;
const RESPOND_URL_INDEX = 19;

export default class ServiceAlert {
    constructor(email) {
        this.notificationType = null;
        this.service = null;
        this.host = null;
        this.address = null;
        this.status = null;

        // parse the body and obtain the service alert components
        this.getBody(email).then(body => {
            Debug.debug(body);
        });
        this.datetimeCreated = email.dateTime.created;
    }

    async getBody(email) {
        return await this.getBodyAsync(email);
    }

    getBodyAsync(email) {
        const body = email.body;
        return body.getAsync(Office.CoercionType.Html, function(async) {
            if(async.status !== Office.AsyncResultStatus.Succeeded) {
                Debug.error('Could not parse body asynchronously on email ' + email.id);
                return null;
            } else {
                return async.value.trim();
            }
        })
    }
}
