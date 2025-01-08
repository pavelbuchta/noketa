import axios from "axios";

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
