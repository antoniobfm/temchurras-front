import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/services/apiClient';

interface IInitialLoadResponse {
  id: string;
  name: string;
  phone_number: string;

  organizing: {
    id: string;
    presence_list: {
      id: string;
      name?: string;
      contribution?: number;
    }[];
  }[];

  calendar: {
    id: string;
    amount_contributed?: number;
  }[];

  churras: {
    id: string;
    name: string;
    description: string;
    contact_number: string;
    date: Date;
    suggested_contribution_with_drinks: number;
    suggested_contribution_without_drinks: number;
    pix_key: string;
    pix_type: string;
    total_participants: number;
    total_revenue: number;
  }[];
}
export const initialLoad = createAsyncThunk(
  '/users/initial-load',
  async (): Promise<IInitialLoadResponse> => {
    const response = await api.post('/users/initial-load');

    return response.data;
  },
);

export const updateName = createAsyncThunk(
  '/users/update-name',
  async (name: string) => {
    const response = await api.post('/users/update-name', {
      name,
    });

    // mixpanel.identify(response.data.user.id);

    return response.data;
  },
);
