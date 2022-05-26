import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { contactsAPI } from 'ContactsAPI/contactsAPI';
import authReducer from './authSlice';

const persistConfig = {
  key: 'auth', storage
}
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
            serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] }
        }).concat(contactsAPI.middleware)
});

const persistor = persistStore(store);
export {persistor, store}