export { Noketa } from "./noketa";
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
