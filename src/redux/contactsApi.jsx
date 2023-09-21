import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getTokenFromState = (state) => {
  if (state && state.auth && state.auth.token) {
    return state.auth.token;
  }
  return null;
};
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getTokenFromState(getState());

 
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
   
    login: builder.mutation({
      query: (newUser) => ({
        url: '/users/login', 
        method: 'POST',
        body: {
          email: newUser.email,
          password: newUser.password,
      
        },
        
      }),
    }),

   
    register: builder.mutation({
      query: newContact => ({
    url: '/users/signup',
    method: 'POST',
    body: {
      name: newContact.name,
      email: newContact.email, 
      password: newContact.password,
    },
  }),
  invalidatesTags: ['Contact'],
    }),

   
    getContactByName: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
    url: '/contacts',
    method: 'POST',
    body: {
      name: newContact.name,
      number:newContact.number,
    },
  }),
  invalidatesTags: ['Contact'],
}),
     logout: builder.mutation({
      query: () => ({
        url: '/logout', 
        method: 'POST', 
       }),
       }),
  }),
});

export const {
  useGetContactByNameQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useLoginMutation, 
  useRegisterMutation,
  useLogoutMutation,
} = contactsApi;