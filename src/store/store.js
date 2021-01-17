// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { surveySlice } from "./surveySlice";

export const store = configureStore({reducer:surveySlice.reducer})