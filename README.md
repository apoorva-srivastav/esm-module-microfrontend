# Microfrontends with ES modules and CDN

This repository demonstrates how we can build and use ES modules for a MicroFrontend architecture.

### Apps and Packages

The repo is based on turborepo which provides a mono repo for micro-apps and it consists of: 

1. Apps:
     1. home-vite-csr : a CSR shell app that assembles all the microapps and ui-library components.
     2. product-csr: a CSR microapp that fetches and displays product list.
     3. home-next-ssr: an SSR shell app.
  
2. UI Components - under packages/ui


## Description
This repo has the microApp and ui components library built as es modules and hosted on CDN from where they get imported into the shell app.

ES build is very fast for building apps and using a CDN to host the ES build, it can be imported directly into Vite app(supported) and Next App(experimental). The CSS is bundled with the app and exported in the ES build itself.
All the dependencies are fetched at runtime, so nothing gets bundled. Also, the CDN cache makes it possible to reduce the loading time. The microApp updates are fast to get reflected on the host/shell app.

With each microapp being hosted and imported into the host app without the host maintaining a pre-defined config, creating a MicroFrontend App with this method eliminates the need for maintaining any dependency list or shared library config as they are handled from the CDN and browser cache.

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

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

