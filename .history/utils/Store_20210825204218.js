import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
};


function reducer(state,action) {
    switch(action.type) {
        case 'DARK_MODE_ON'bottom: 'auto'
    }
}