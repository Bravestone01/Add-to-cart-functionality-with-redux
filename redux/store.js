import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routeReducer";
const store = configureStore({
    reducer: routeReducer,
 
});

export default store;