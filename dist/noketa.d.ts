import { ProfileAttributes } from "src";
export declare class Noketa {
    private apiKey;
    constructor(apiKey: string);
    private post;
    profiles: {
        create: (payload: {
            listId: string;
            attributes: ProfileAttributes;
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
