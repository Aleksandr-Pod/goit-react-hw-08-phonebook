// mockapi - https://628a0f12e5e5a9ad32206b7a.mockapi.io/:endpoint

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsAPI = createApi ({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://628a0f12e5e5a9ad32206b7a.mockapi.io/' }),
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => 'contacts/',
            providesTags: ['contacts']
        }),
        addContact: builder.mutation({
            query: data => ({
                url: 'contacts/',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['contacts']
        }),
        deleteContact: builder.mutation({
            query: id => ({
            url: `contacts/${id}`,
            method: "DELETE",
            }),
            invalidatesTags: ['contacts']
        })
    })
})
export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsAPI; 