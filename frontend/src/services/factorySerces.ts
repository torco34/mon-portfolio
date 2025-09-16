import { API } from "../API/api";
export function createCrudService<T>(endpoint: string) {
  return {
    getAll: async (): Promise<T[]> => (await API.get<T[]>(endpoint)).data,

    getById: async (id: string): Promise<T> =>
      (await API.get<T>(`${endpoint}/${id}`)).data,

    create: async (data: Partial<T>): Promise<T> =>
      (await API.post<T>(endpoint, data)).data,

    update: async (id: string, data: Partial<T>): Promise<T> =>
      (await API.put<T>(`${endpoint}/${id}`, data)).data,

    delete: async (id: string): Promise<void> => {
      await API.delete(`${endpoint}/${id}`);
    },
  };
}
