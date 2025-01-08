type ProfileAttributes = {
    first_name?: string;
    last_name?: string;
    locale?: string;
    gender?: string;
    age?: number;
    birthdate?: Date;
    external_id?: string;
    last_event_date?: Date;
    properties?: Object;
};
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
export {};
