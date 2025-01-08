export type ProfileAttributes = Partial<{
    first_name?: string | undefined;
    last_name?: string | undefined;
    locale?: string | undefined;
    gender?: string | undefined;
    age?: number | undefined;
    birthdate?: Date | undefined;
    external_id?: string | undefined;
    last_event_date?: Date | undefined;
    properties?: Object | undefined;
}>;
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
