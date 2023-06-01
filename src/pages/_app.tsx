import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import type { AppProps } from "next/app";
import { store, persist } from "@/app";
import "../app/styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
