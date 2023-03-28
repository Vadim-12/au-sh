import '@/styles/main.scss'
import '../../public/js/index.js'
import type { AppProps } from 'next/app'
import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import store from '@/store/index';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Запрос за данными администратора на сервер
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
