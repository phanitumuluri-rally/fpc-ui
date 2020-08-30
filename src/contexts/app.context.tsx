import React, { PropsWithChildren, useState } from "react";

export type AppContextType = {
  user?: any;
  update: (prop: string, value: any) => void;
  reset: (data: AppContextType&{user: any, isAdmin: boolean}) => void;
};

const appContext: AppContextType = {
  update: (prop: string, value: any) => {},
  reset: (data: AppContextType&{user: any, isAdmin: boolean}) => {}
};

export const AppContext = React.createContext(appContext);

export default function AppProvider(props: PropsWithChildren<{}>) {
  const user = localStorage.getItem('user') ? 
    JSON.parse(atob(localStorage.getItem('user') || '')) : null;
  const [appData, setAppData] = useState({...appContext, user});
  const updateHandler = (prop: string, value: any) => {
    setAppData({...appData, [prop]: value});
  };
  const resetHandler = (data: AppContextType&{user: any, isAdmin: boolean}) => {
    setAppData({...data});
  };

  return (
    <AppContext.Provider value={{...appData, update: updateHandler, reset: resetHandler}}>
      {props.children}
    </AppContext.Provider>
  );
}
