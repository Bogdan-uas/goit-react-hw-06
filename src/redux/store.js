import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { phoneBookReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const phoneBookPersistConfig = {
    key: "phonebook",
    storage,
    whitelist: ["contacts"],
};

export const store = configureStore({
reducer: {
    phonebook: persistReducer(phoneBookPersistConfig, phoneBookReducer),
    filters: filtersReducer,
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
});

export const persistor = persistStore(store);