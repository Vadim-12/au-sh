import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>АВТОВОЛЬТ - доставка автомобилей из Японии</title>
        <meta name="description" content="АВТОВОЛЬТ - доставка автомобилей из Японии" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id='jquery-cdn'
          src="https://code.jquery.com/jquery-3.6.4.min.js"
          integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
          crossOrigin="anonymous"></Script>
        <Script id='slick-cdn' type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></Script>
        <Script id='jquery-local' src="../../public/js/jquery.min.js"></Script>
        <Script id='slick-local' src="../../public/js/slick.min.js"></Script>
        <Script id='2gis' src="https://widgets.2gis.com/js/DGWidgetLoader.js" lang='JavaScript | JScript | VBS | VBScript'></Script>
        {//<Script id='js' src="../../public/js/index.js"></Script>
        }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
