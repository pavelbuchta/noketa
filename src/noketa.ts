import axios from "axios";

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

  public contacts = {
    create: async (audienceId: string, name: string, email: string) => {
      const payload = { audienceId, name, email };
      return this.post<{ message: string; status: number }>(
        "/contacts/create",
        payload
      );
    },
  };
}
