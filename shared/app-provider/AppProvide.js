
'use client';

import { store } from "../../redux/store/store";
import { Provider } from "react-redux";


function AppProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default AppProvider;