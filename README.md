# Microfrontends with ES modules and CDN

This repository demonstrates how we can build and use ES modules for a MicroFrontend architecture.

### Apps and Packages

The repo is based on turborepo which provides a mono repo for micro-apps and it consists of: 

1. Apps:
     1. [home-vite-csr](https://home-vite-csr.vercel.app/) : a CSR shell app (stiching layer) that assembles all the microfrontend apps and ui-library components.
     2. [home-next-ssr](https://home-next-ssr.vercel.app/): an SSR shell app (stiching layer).
     3. [product-csr](https://product-csr.vercel.app): a CSR microfrontend app that fetches and displays product list.
     
  
2. UI Components - reusable component library defined under packages/ui


## Description
This repo has the MFEs and ui components library built as es modules and hosted on CDN from where they get imported into the home/shell app.

ES build is very fast for building apps. Using it with CDN to host, the ES module can be imported directly into Vite app(supported) and Next App(experimental). The CSS is bundled with the app and exported in the ES build.

All the dependencies are fetched at runtime, so nothing gets bundled. Also, the CDN cache makes it possible to reduce the loading time. The MFE updates are fast to get reflected on the host/shell app.

With each microapp being hosted and imported into the host app without the host maintaining a config, creating a MicroFrontend(MFE) App with this method eliminates the need for maintaining any configuration as they are handled from the CDN and browser cache.

Dependencies such as react and react-dom are shared across applications. They are fetched from [esm.sh](https://esm.sh/) and get cached in the browser, reducing the bundle size. Each app can share other dependencies as well through url imports.

ESM can also be used with Import maps for better-defined scopes and dependency resolution. 

### Develop

To develop/run all apps and packages, run the following command:

```
npm i
npm run dev
```

### Build

To build all apps and packages, run the following command:

```
npm build
```

### CDN

Currently the apps and es module builds are hosted using Vercel and you can find those in the import statements used in the host/shell apps.

If you want to test your changes, you can use the server defined to host the apps locally and import them to see the changes.

You can do so by first building the specific app using,

```
npm build
```

 and then doing 
 ```
 vercel 
 ```
or

```
vercel --prod
```
