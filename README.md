# Microfrontends with ES modules and CDN

This repository demonstrates how we can build and use ES modules for a MicroFrontend architecture.

### Apps and Packages

The repo is based on turborepo which provides a mono repo for micro-apps and it consists of: 

1. Apps:
     1. home-vite-csr : a CSR shell app that assembles all the microfrontend apps and ui-library components. (https://home-vite-csr.vercel.app/)
     2. product-csr: a CSR microfrontend app that fetches and displays product list. (https://product-csr.vercel.app )
     3. home-next-ssr: an SSR shell app. (https://home-next-ssr-apoorva-srivastav.vercel.app/)
  
2. UI Components - under packages/ui


## Description
This repo has the MFEs and ui components library built as es modules and hosted on CDN from where they get imported into the shell app.

ES build is very fast for building apps and using a CDN to host the ES build, it can be imported directly into Vite app(supported) and Next App(experimental). The CSS is bundled with the app and exported in the ES build itself.

All the dependencies are fetched at runtime, so nothing gets bundled. Also, the CDN cache makes it possible to reduce the loading time. The MFE updates are fast to get reflected on the host/shell app. This can also be used with HTML import maps for ease of import and defining scope to eliminate library version conflicts.

With each microapp being hosted and imported into the host app without the host maintaining a pre-defined config, creating a MicroFrontend(MFE) App with this method eliminates the need for maintaining any dependency list or shared library config as they are handled from the CDN and browser cache.

### Develop

To develop/run all apps and packages, run the following command:

```
npm i
npm dev
```

### Build

To build all apps and packages, run the following command:

```
npm build
```

### CDN

Currently the apps and es module builds are hosted using Vercel and you can find those in the import statements used in the host/shell apps.

In case you want to test your changes, you can use the server defined to host the apps locally and import them to see the changes.

You can do so by first building the app using,

```
npm build
```

 and then doing 
 ```
 npm serve
 ```

in the particular app.
