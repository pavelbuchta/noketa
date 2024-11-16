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
}
