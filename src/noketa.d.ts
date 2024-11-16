declare module "noketa" {
  export class Noketa {
    constructor(apiKey: string);
    contacts: {
      create(audienceId: string, name: string, email: string): Promise<any>;
    };
  }
}
