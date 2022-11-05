import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://courses-dashboard.herokuapp.com/api/course/',
  }),
  tagTypes: ['Session'],
  endpoints: (builder) => ({
    getSection: builder.query({
      query: () => `section`,
      providesTags: ['Session'],

    }),
    createSection: builder.mutation({
      query: (payload) => ({
        url: 'section',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        
      }),
      invalidatesTags: ['Session']
    }),
    updateSectionData: builder.mutation({
      query: ({id, payload}) => ({
        url: `section/${id}`,
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      }),
      invalidatesTags: ['Session']
    }),
    updateSection: builder.mutation({
      query: ({payload}) => ({
        url: `section`,
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      }),
      invalidatesTags: ['Session']
    }),
    updateLesson: builder.mutation({
      query: ({payload}) => ({
        url: `lesson`,
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      }),
      invalidatesTags: ['Session']
    }),
    createLesson: builder.mutation({
      query: (payload) => ({
        url: 'lesson',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Session']
    }),
    deleteLesson: builder.mutation({
      query: ({id}) => ({
        url: `lesson/${id}`,
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Session']
    }),
    deleteSection: builder.mutation({
      query: ({id}) => ({
        url: `section/${id}`,
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Session']
    }),

  }),
})

export const { 
  useGetSectionQuery,
  useCreateSectionMutation,
  useCreateLessonMutation,
  useUpdateSectionDataMutation,
  useUpdateLessonMutation,
  useUpdateSectionMutation,
  useDeleteLessonMutation,
  useDeleteSectionMutation
 } = courseApi
