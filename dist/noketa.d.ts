export declare class Noketa {
    private apiKey;
    constructor(apiKey: string);
    private post;
    contacts: {
        create: (payload: {
            audienceId: string;
            name: string;
            email: string;
        }) => Promise<any>;
    };
    emails: {
        send: (payload: {
            from: string;
            to: string;
            subject: string;
            html: string;
        }) => Promise<any>;
    };
}
