import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/services/apiClient';

interface ICreateChurras {
  name: string;
  description: string;
  date: Date;

  suggested_contribution_with_drinks: number;
  suggested_contribution_without_drinks: number;

  pix_key: string;
  pix_type: string;
}

interface ICreateChurrasResponse {
  id: string;

  name: string;
  description: string;
  contact_number: string;
  date: Date;

  suggested_contribution_with_drinks: number;
  suggested_contribution_without_drinks: number;

  pix_key: string;
  pix_type: string;
}

export const createChurras = createAsyncThunk(
  '/churras/create',
  async (data: ICreateChurras): Promise<ICreateChurrasResponse> => {
    const response = await api.post('/churras/create', data);

    return response.data;
  },
);

interface IShowChurrasResponse {
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
}

export const showChurras = createAsyncThunk(
  '/churras/show',
  async (churras_id: string): Promise<IShowChurrasResponse> => {
    const response = await api.post('/churras/show', { churras_id });

    return response.data;
  },
);

interface IConfirmPresenceResponse {
  id: string;
  user_id: string;
  name?: string;
}

export const confirmPresence = createAsyncThunk(
  '/churras-presence/confirm-presence',
  async (churras_id: string): Promise<IConfirmPresenceResponse> => {
    const response = await api.post('/churras-presence/confirm-presence', {
      churras_id,
    });

    return response.data;
  },
);

interface IConfirmContribution {
  churras_id: string;
  contributor_id: string;
  amount_contributed: number;
}

interface IConfirmContributionResponse {
  user_id: string;
  amount_contributed: number;
  churras_id: string;
}

export const confirmContribution = createAsyncThunk(
  '/churras-presence/confirm-contribution',
  async ({
    churras_id,
    contributor_id,
    amount_contributed,
  }: IConfirmContribution): Promise<IConfirmContributionResponse> => {
    const response = await api.post('/churras-presence/confirm-contribution', {
      churras_id,
      contributor_id,
      amount_contributed,
    });

    return response.data;
  },
);

interface IRemoveParticipant {
  churras_id: string;
  participant_id: string;
}

interface IRemoveParticipantResponse {
  participant_id: string;
  churras_id: string;
}

export const removeParticipant = createAsyncThunk(
  '/churras-presence/remove-participant',
  async ({
    churras_id,
    participant_id,
  }: IRemoveParticipant): Promise<IRemoveParticipantResponse> => {
    const response = await api.post('/churras-presence/remove-participant', {
      churras_id,
      participant_id,
    });

    return response.data;
  },
);
