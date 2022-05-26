import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from 'ContactsAPI/contactsAPI';
import loggedReducer from './otherSlices';


export const store = configureStore({
    reducer: {
        [contactsAPI.reducerPath]: contactsAPI.reducer,
        isLogged: loggedReducer
    },

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(contactsAPI.middleware)
});