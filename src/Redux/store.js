import { configureStore} from '@reduxjs/toolkit';
import { contactsAPI } from 'ContactsAPI/contactsAPI';

export const store = configureStore({
    reducer: { [contactsAPI.reducerPath]: contactsAPI.reducer},

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(contactsAPI.middleware)
});