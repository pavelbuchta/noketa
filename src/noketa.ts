import axios from "axios";

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

export class Noketa {
  private apiKey: string;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("API key is required");
    }
    this.apiKey = apiKey;
  }

  private async post<T>(endpoint: string, data: object): Promise<T> {
    const url = `https://noketa.net/api/noketa${endpoint}`;
    const headers = { "Noketa-Secret": this.apiKey };

    try {
      const response = await axios.post<T>(url, data, { headers });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Request failed");
    }
  }

  public profiles = {
    create: async (payload: {
      listId: string;
      attributes: ProfileAttributes;
      email: string;
    }) => {
      return this.post<any>("/profiles", payload);
    },
  };

  public emails = {
    send: async (payload: {
      from: string;
      to: string;
      subject: string;
      html: string;
    }) => {
      return this.post<any>("/emails/send", payload);
    },
  };
}
