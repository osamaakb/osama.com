export interface SideProject {
    id: string;
    title: string;
    img?: string;
    description: string;
    story: string;
    repoLink?: string;
    demoLink?: string;
    screenShots?: string;

}

export const sideProjcets: SideProject[] = [
    {
        id: "1",
        title: "giphier for fast gifs",
        description: "Search and find gifs or stickers you like and share them in a faster way",
        story: `The original [giphy](https://giphy.com/) is slow and has lots of features that I don't need and I think
        most of people too, so I went ahead and made something simpler and get you the job done with simple UI.  
  
        Tech stack:
        - react (JavaScript)
        - giphy api
        - redux
        `,
        repoLink: "https://github.com/osamaakb/giphier-for-fast-gifs",
        demoLink: "https://giphier.netlify.app/",
        img: "/projectsImages/giphier.png"
    },
    {
        id: "2",
        title: "watch later",
        description: "Simple website where you can keep all your movies in one place to watch later",
        story: `
        Simple website where you can keep all your movies in one place to watch later,

        _it was built using vanillaJS._

        live website:
        https://osamaakb.github.io/watch-later-web/#

        ### Mobile Version
        This website is originally a mobile app, you can find the androind app [here](https://play.google.com/store/apps/details?id=com.osama.akb.watchlater)

        if you want to build or participate in building the ios app, feel free to contact me.

        `,
        repoLink: "https://github.com/osamaakb/watch-later-web",
        demoLink: "https://osamaakb.github.io/watch-later-web",
        img: "/projectsImages/watchLater.png",
        screenShots: "/screenShots/watchLater01.png,/screenShots/watchLater02.png"
    },
    {
        id: "3",
        title: "work with us",
        description: "a NodeJS back-end app for a mobile app that provides job offers to people",
        story: "the back-end app for a mobile app that provides job offers to people, this was built using `JavaScript`, `NodeJS`, `express`, `PostgresSQL`, `sequelize (ORM)`, `chai`, `jwt`. \n ### Mobile App You can download or checkout the android version here: https://play.google.com/store/apps/details?id=com. \n workwithus.work_with_us_project. For ios, apple didn't publish the app ):",
        repoLink: "https://github.com/osamaakb/work_with_us",
        screenShots: "/screenShots/wwu01.png,/screenShots/wwu02.png"
    },
    {
        id: "4",
        title: "osama.com",
        description: "my portofolio website",
        story: "This is a personal projcet for my website, this repo is public to help beginners starting with react or next js by taking a look at the code and this readme. \n This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).",
        img: "/projectsImages/osama.com.png"
    },
    {
        id: "5",
        title: "mentorship",
        description: "Cool project to provide mentroships in easy way",
        story: `
        This website was developed by the students of the recoded bootcamp in Istanbul/Turkey
        
        You can visit the website live [here](https://osamaakb.github.io/mentorship/)
        
        # What is Mentoship?
        Small website that allows you to find a Mentor/Mentee with the time that suits you and connect with them really easy
        
        # Tech Stack
        - HTML/CSS
        - Vanilla JS
        - Firebase Auth and Firestore Database
        `,
        img: "/projectsImages/m&m.png"
    }
]