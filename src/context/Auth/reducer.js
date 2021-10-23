import React, { useEffect, useReducer, createContext, useContext } from "react";
import { actionTypes } from "./types";
import { readLocalStorage, writeLocalStorage } from "../../utils/localstorage";
import { darkTheme, lightTheme } from "../../UI/components/Theme/Theme";

const AuthContext = createContext();

export const initialState = {
  isAuth: false,
  user: [],
  theme: "dark",
  agree: false,
  isLogged: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.USER: {
      return {
        ...state,
        user: [...state.user, { ...action.payload }],
      };
    }
    case actionTypes.AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case actionTypes.LOGIN: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case actionTypes.LOGOUT: {
      return {
        ...state,
        user: [...state.user],
        isAuth: false,
        agree: false,
      };
    }
    case actionTypes.THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case actionTypes.AGREE: {
      return {
        ...state,
        agree: action.payload,
      };
    }
    case actionTypes.ISLOGGED: {
      return {
        ...state,
        isLogged: action.payload,
      };
    }
    case actionTypes.ISLOGGED: {
      const isThere = state.user.find((user) => user.email === action.payload);
      return isThere
        ? {
            ...state,
            isLogged: true,
          }
        : {
            ...state,
            isLogged: false,
          };
    }
    default:
      return state;
  }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuth, theme, agree } = state;

  useEffect(() => {
    const lastState = readLocalStorage("user");
    if (lastState) {
      dispatch({ type: actionTypes.USER, payload: lastState.user });
      dispatch({ type: actionTypes.AUTH, payload: lastState.isAuth });
    }
  }, []);

  useEffect(() => {
    writeLocalStorage("user", JSON.stringify({ user, isAuth, theme }));
  }, [user, isAuth, theme]);

  const value = {
    ...state,
    login: (values) => {
      dispatch({
        type: actionTypes.USER,
        payload: {
          name: values.name,
          lastName: values.lastName,
          email: values.email,
        },
      });
      dispatch({ type: actionTypes.AUTH, payload: true });
    },
    logout: () => {
      dispatch({ type: actionTypes.LOGOUT });
      dispatch({ type: actionTypes.AGREE, payload: false });
    },
    getTheme: () => {
      theme === "dark"
        ? dispatch({ type: actionTypes.THEME, payload: "light" })
        : dispatch({ type: actionTypes.THEME, payload: "dark" });
    },
    themeMode: theme === "light" ? lightTheme : darkTheme,
    setAgree: () => {
      agree === false
        ? dispatch({ type: actionTypes.AGREE, payload: true })
        : dispatch({ type: actionTypes.AGREE, payload: false });
    },
    setIsLogged: (isLogged) => {
      isLogged
        ? dispatch({ type: actionTypes.ISLOGGED, payload: false })
        : dispatch({ type: actionTypes.ISLOGGED, payload: true });
    },
    isRegistered: (email) => {
      dispatch({ type: actionTypes.ISREGISTERED, payload: email });
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) return null;
  return context;
}

export { AuthProvider, useAuth };
