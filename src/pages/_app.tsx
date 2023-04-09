import "../../public/scss/main.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { RootLayout } from "@/core/layouts/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
