import { wrapper } from "@/shared/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  const { props, store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default App;
