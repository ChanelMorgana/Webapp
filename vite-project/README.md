# Project Setup

The front-end code is the code that renders within the browser. We basically send this code to the user and the browser figures out how to render it. So that is what we are building in this section.

I chose vite.js [https://vitejs.dev/guide/](https://vitejs.dev/guide/) as our front-end tooling. Essentially you need something to bundle everything and make it run on a server locally. Traditionally this is where we use webpack [https://webpack.js.org](https://webpack.js.org/) but it’s a little too configurable for our use case.

There are the exact steps that I took

1. `npm create vite@latest`
   1. npm is a package depository [https://docs.npmjs.com/about-npm](https://docs.npmjs.com/about-npm). People upload their code there and you can pull it down and use it, in this case we pull down the latest version of vite and run that create command
2. `cd vite-project`
3. `npm install`
   1. Installs all of the packages and dependencies for the project locally

That’s all the basic setup to run the front-end code:

1. `npm run dev`
2. Then just open up the local URL in the browser and you’re all set. All that’s left to do is edit the code, make updates to it and navigate to the URL again to see the updates.
