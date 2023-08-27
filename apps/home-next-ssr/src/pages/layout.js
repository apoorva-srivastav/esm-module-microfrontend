import { Html, Head, Main, NextScript, Script } from 'next/document'

export default function Document() {
  return (
    <html lang="en">
      <Head>
      {/* <Script id="importmap" type="importmap">
          {
        `imports: {
          "react": "https://esm.sh/lodash-es@4.17.21",
          "react-dom": "https://esm.sh/react-dom",
          "products": "https://product-csr.vercel.app",
          // allows import { my-component } from "component-library" syntax
          "component-library/": "https://ui-l.vercel.app",
          "button": "https://ui-l.vercel.app/Button.mjs",
          "header": "https://ui-l.vercel.app/Header.mjs",
          "footer": "https://ui-l.vercel.app/Footer.mjs"  
        }`
      }
    </Script> */}
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}
