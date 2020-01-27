const ACCESS_GUEST = 0;
const ACCESS_USER = 1;
const ACCESS_ADMIN = 2;
const ACCESS_SUPERUSER = 3;
const PROFILE_TYPE_OFFICE = 'office365';

export default class User {
    constructor(displayName, emailAddress, timezone, profileType=PROFILE_TYPE_OFFICE, accessType=ACCESS_GUEST) {
        this.displayName = displayName;
        this.emailAddress = emailAddress;
        this.timezone = timezone;
        this.profileType = profileType;
        this.accessType = accessType;
    }

    get firstName() {
        return this.displayName.split(', ')[1]
    }

    get lastName() {
        return this.displayName.split(', ')[0]
    }

    set firstName(firstName) {
        let splitDisplayName = this.displayName.split[', '];
        splitDisplayName[1] = firstName;
        this.displayName = splitDisplayName.join(', ');
    }

    set lastName(lastName) {
        let splitDisplayName = this.displayName.split[', '];
        splitDisplayName[0] = lastName;
        this.displayName = splitDisplayName.join(', ');
    }
}