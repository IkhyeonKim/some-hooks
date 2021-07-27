import { createContext, useContext, useReducer } from "react";

export default function makeStore(reducer, initialState) {
  const dispatchContext = createContext();
  const stroeContext = createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
      <dispatchContext.Provider value={dispatch}>
        <stroeContext.Provider value={store}>{children}</stroeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  const useDispatch = () => useContext(dispatchContext);
  const useStore = () => useContext(stroeContext);

  return [StoreProvider, useDispatch, useStore];
}
