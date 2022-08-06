/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from '@reduxjs/toolkit';
import {
  sendVerificationCode,
  signOut,
  verifyVerificationCode,
} from './authentication.actions';
import {
  confirmContribution,
  confirmPresence,
  createChurras,
  removeParticipant,
  showChurras,
} from './churras.actions';
import { initialLoad, updateName } from './user.actions';

interface IUser {
  userInfo: {
    id: string;
    name?: string;
    phone_number: string;
    history: {
      id: string;
      slug: string;
      name: string;
      description: string;
      contribution: number;
      date: Date;
    }[];
  };
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
  calendar: {
    id: string;
    amount_contributed?: number;
  }[];
  organizing: {
    id: string;
    presence_list: {
      id: string;
      name?: string;
      amount_contributed?: number;
    }[];
  }[];
  pending: boolean;
  error: boolean;
  messages: Array<{ title: string; type: 'error' | 'success' }>;
}

const initialState: IUser = {
  userInfo: {
    id: '',
    name: '',
    phone_number: '',
    history: [],
  },
  churras: [],
  calendar: [],
  organizing: [],
  pending: false,
  error: false,
  messages: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Initial Load User
    builder.addCase(initialLoad.pending, (state, action) => {
      state.pending = true;
      state.error = false;
    }),
      builder.addCase(initialLoad.fulfilled, (state, action) => {
        state.pending = false;

        state.userInfo.id = action.payload.id;
        state.userInfo.name = action.payload.name;
        state.userInfo.phone_number = action.payload.phone_number;

        const newOrganizing = action.payload.organizing.map(churras => {
          return {
            ...churras,
          };
        });

        state.organizing = newOrganizing;

        state.churras = action.payload.churras;
        state.calendar = action.payload.calendar;

        state.messages = [
          ...state.messages,
          { title: 'Bem-vindo de volta', type: 'success' },
        ];
      }),
      builder.addCase(initialLoad.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      }),
      // Send Verification Code
      builder.addCase(sendVerificationCode.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(sendVerificationCode.fulfilled, (state, action) => {
        state.pending = false;

        state.messages = [
          ...state.messages,
          { title: 'Código de verificação enviado', type: 'success' },
        ];
      }),
      builder.addCase(sendVerificationCode.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      }),
      // Verify Verification Code
      builder.addCase(verifyVerificationCode.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(verifyVerificationCode.fulfilled, (state, action) => {
        state.pending = false;

        state.userInfo = { ...action.payload.user, history: [] };
        state.calendar = action.payload.calendar;
        state.organizing = action.payload.organizing;
        state.churras = action.payload.churras;

        state.messages = [
          ...state.messages,
          { title: 'Código verificado com sucesso', type: 'success' },
        ];
      }),
      builder.addCase(verifyVerificationCode.rejected, (state, action) => {
        state.pending = false;
        state.error = true;

        state.messages = [
          { title: 'Código de verificação inválido', type: 'error' },
        ];
      }),
      // Sign Out
      builder.addCase(signOut.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(signOut.fulfilled, (state, action) => {
        state.pending = false;

        state.userInfo = initialState.userInfo;
        state.calendar = initialState.calendar;
        state.organizing = initialState.organizing;
        state.churras = initialState.churras;

        state.messages = [{ title: 'Deslogado com sucesso', type: 'success' }];
      }),
      builder.addCase(signOut.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      }),
      // Update Name
      builder.addCase(updateName.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(updateName.fulfilled, (state, action) => {
        state.pending = false;

        state.userInfo.name = action.payload.name;

        state.messages = [
          ...state.messages,
          { title: 'Nome atualizado com sucesso', type: 'success' },
        ];
      }),
      builder.addCase(updateName.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      }),
      // Create Churras
      builder.addCase(createChurras.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(createChurras.fulfilled, (state, action) => {
        state.pending = false;

        const newChurrasOrganizing = {
          id: action.payload.id,
          presence_list: [],
        };

        state.organizing = [...state.organizing, newChurrasOrganizing];

        const newChurras = {
          ...action.payload,
          total_participants: 0,
          total_revenue: 0,
        };

        state.churras = [...state.churras, newChurras];

        state.messages = [
          ...state.messages,
          { title: 'Churras criado com sucesso', type: 'success' },
        ];
      }),
      builder.addCase(createChurras.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      }),
      // Show Churras
      builder.addCase(showChurras.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(showChurras.fulfilled, (state, action) => {
        state.pending = false;

        const newChurras = [...state.churras];
        const churrasIndex = newChurras.findIndex(
          churras => churras.id === action.payload.id,
        );

        if (churrasIndex !== -1) {
          newChurras[churrasIndex] = action.payload;

          state.churras = [...newChurras];
        } else {
          state.churras = [...state.churras, action.payload];
        }
      }),
      builder.addCase(showChurras.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      }),
      // Confirm Presence
      builder.addCase(confirmPresence.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(confirmPresence.fulfilled, (state, action) => {
        state.pending = false;

        state.calendar = [...state.calendar, action.payload];

        // Caso seja o administrador do churras, atualiza a lista de presença
        const churrasOrganizingIndex = state.organizing.findIndex(
          churras => churras.id === action.payload.id,
        );

        if (churrasOrganizingIndex !== -1) {
          const newOrganizing = [...state.organizing];

          newOrganizing[churrasOrganizingIndex].presence_list = [
            ...newOrganizing[churrasOrganizingIndex].presence_list,
            { id: action.payload.user_id, name: action.payload.name },
          ];
        }

        // Atualiza o total de presença do churras
        const newChurras = [...state.churras];
        const churrasIndex = state.churras.findIndex(
          churras => churras.id === action.payload.id,
        );
        newChurras[churrasIndex].total_participants += 1;

        state.churras = [...newChurras];

        state.messages = [
          ...state.messages,
          { title: 'Presença confirmada com sucesso', type: 'success' },
        ];
      }),
      builder.addCase(confirmPresence.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      }),
      // Confirm Contribution
      builder.addCase(confirmContribution.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(confirmContribution.fulfilled, (state, action) => {
        state.pending = false;

        // Atualiza o organizing
        const newChurrasOrganizing = [...state.organizing];

        const churrasOrganizingIndex = newChurrasOrganizing.findIndex(
          churras => churras.id === action.payload.churras_id,
        );

        const presenceIndex = newChurrasOrganizing[
          churrasOrganizingIndex
        ].presence_list.findIndex(
          presence => presence.id === action.payload.user_id,
        );

        const updatedOrganizing =
          newChurrasOrganizing[churrasOrganizingIndex].presence_list[
            presenceIndex
          ];

        newChurrasOrganizing[churrasOrganizingIndex].presence_list[
          presenceIndex
        ] = {
          ...updatedOrganizing,
          amount_contributed: action.payload.amount_contributed,
        };

        state.organizing = [...newChurrasOrganizing];

        // Atualiza o churras
        const newChurras = [...state.churras];

        const churrasIndex = newChurras.findIndex(
          churras => churras.id === action.payload.churras_id,
        );

        const updatedChurras = newChurras[churrasIndex];

        updatedChurras.total_revenue = newChurrasOrganizing[
          churrasOrganizingIndex
        ].presence_list.reduce(
          (acc, curr) =>
            curr.amount_contributed ? acc + curr.amount_contributed : acc,
          0,
        );

        state.churras = [...newChurras];

        // Atualiza Calendar se for o administrador do churras
        if (action.payload.user_id === state.userInfo.id) {
          const newChurrasCalendar = [...state.calendar];

          const churrasCalendarIndex = newChurrasCalendar.findIndex(
            churras => churras.id === action.payload.churras_id,
          );

          const updatedCalendar = newChurrasCalendar[churrasCalendarIndex];

          updatedCalendar.amount_contributed =
            action.payload.amount_contributed;

          state.calendar = [...newChurrasCalendar];
        }

        state.messages = [
          ...state.messages,
          { title: 'Contribuição atualizada com sucesso', type: 'success' },
        ];
      }),
      builder.addCase(confirmContribution.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      }),
      // Remove Participant
      builder.addCase(removeParticipant.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      }),
      builder.addCase(removeParticipant.fulfilled, (state, action) => {
        state.pending = false;

        const newOrganizing = [...state.organizing];

        let amount_contributed = 0;

        const churrasOrganizingIndex = newOrganizing.findIndex(
          churras => churras.id === action.payload.churras_id,
        );

        const presenceIndex = newOrganizing[
          churrasOrganizingIndex
        ].presence_list.findIndex(
          presence => presence.id === action.payload.participant_id,
        );

        amount_contributed =
          newOrganizing[churrasOrganizingIndex].presence_list[presenceIndex]
            .amount_contributed || 0;

        newOrganizing[churrasOrganizingIndex].presence_list.splice(
          presenceIndex,
          1,
        );

        state.organizing = [...newOrganizing];

        // Atualiza o total de participante no churras e remove a contribuição
        const newChurras = [...state.churras];

        const churrasIndex = newChurras.findIndex(
          churras => churras.id === action.payload.churras_id,
        );

        newChurras[churrasIndex].total_participants -= 1;
        newChurras[churrasIndex].total_revenue -= amount_contributed;

        state.churras = [...newChurras];

        // Caso seja o administrador do churras, atualizar calendar
        const newCalendar = [...state.calendar];
        const churrasCalendarIndex = newCalendar.findIndex(
          churras => churras.id === action.payload.churras_id,
        );

        newCalendar.splice(churrasCalendarIndex, 1);

        state.calendar = [...newCalendar];

        state.messages = [
          ...state.messages,
          { title: 'Participante removido com sucesso', type: 'success' },
        ];
      }),
      builder.addCase(removeParticipant.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
