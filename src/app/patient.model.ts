/**
 * Provides a `Patient` object
 */
export class Patient {
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public suffix: string,
        public emailAddress: string,
        public profileImage: string,
        public doctorName: string
    ) {}

    toString(): string {
        return this.firstName + this.middleName + this.lastName + this.suffix + this.emailAddress + this.doctorName;
    }
}
