# Intro
This is a personal projcet for my website, this repo is public to help beginners starting with react or next js by taking a look at the code and this readme.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Plannign this project

#### Planning
I started thinking about the pages I will need and what content will be there, picked up the tools and services I will need to build this project, after that I just wrote my ideas in a github [gist](https://gist.github.com/) to organize them a bit (it turned up not really organized to be honest), [here](https://gist.github.com/osamaakb/56ae5997e75a06a1052be09a9ab27cf0) is that gist for reference, it may not look very clear as it was my scratch board.

#### Design
Now we go to the design phase, I have some experience in UI/UX to design a small website like this one, also I wanted it to represent me, so I went ahead and opened a new [Figma](https://www.figma.com/) file and started putting the design together, I didn't make a fully professional design, so you won't find a color pallette or responsive design, [here](https://www.figma.com/file/yVausHLif05C8cIiUVQN16/Portofolio?node-id=0%3A1) is my figma file for reference, the data their is just a place holder (not real data).

### Tech stack used in this project
- [TypeScript](https://www.typescriptlang.org/): the programming language, typescript is better than the regular JavaScript because it supports types for data.
- [Next.js](https://nextjs.org/): as the front-end framework
- [tailwindcss](https://tailwindcss.com/): CSS framework, css frameworks are pre-writtin classes for you to use and make styling faster)
- [eslint](https://eslint.org/): for linting, linting allow you to add rules to your code documents and test your code for these rules, for example all statements should end with `;` if not, it will through an error when you try to lint.
- [pretteir](https://prettier.io/): for formatting the code, pretteir is used to format your code indentation and syntax and making sure it follows the code style you provided in the pretteir config file, for example, replace all single quotations `'` with double quotations `"`.
- [Vercel](https://vercel.com/dashboard): for hosting, later on development you will have to make your website accessible by any one online, this is why you will need to host your website, there are many ways to do this, like buying a server subscription and hosting your work there, or just by using vercel or [netlify](https://www.netlify.com/) (which is way easier).
- [react-query](https://react-query.tanstack.com/): for better data synchronization, in easier terms, it helps you cache your fetched data, control data when background updates, and other things related to data synchronization.
- [medium api](https://github.com/Medium/medium-api-docs#22-self-issued-access-tokens): to fetch my medium posts, however, I'm not actually using the api, it is very limited, I'm using another way which is converting the `RSS` response I receive from calling this `https://medium.com/feed/@osamaakb` and convert that to JSON using this site `https://rss2json.com`, it is a bit of a work I know but medium's api doesn't give you the full article content.

### Other useful packages and services I recommend you to add to your project (My project isn't that big so I didn't bother adding them)
- [Jest](https://jestjs.io/docs/getting-started) for testing: it is very important to test your code before sending it to production, testing is a fast way to ensure that your code is working fine with no errors.
- [Husky](https://typicode.github.io/husky/#/?id=install): to improve writing your git commit message, and run liniting and testing all at once.
- I will add more as they come to mind

### Can you participate in this project?
Yes, you can, this project is open source which means any one can `fork` it and do their changes on a *new branch*, then submit a `pull request` so I can review and merge it later.

I know it doesn't make much sense to participate in such a project, but just to let you know that it *is possible*, you will only get one thing out of it, a `code review` (:

## To Start the project
- `fork` this repo
- clone it on your computer (so you can host it locally)
- install all the dependencies by going to the project folder and running `yarn` or `npm install`
- finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
