export interface SideProject {
    id: string;
    title: string;
    img?: string;
    description: string;
    story: string;
    repoLink?: string;
    demoLink?: string;

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
        demoLink: "https://giphier.netlify.app/"
    },
    {
        id: "2",
        title: "watch later",
        description: "Simple website where you can keep all your movies in one place to watch later",
        story: `
        This website is originally a mobile app, you can find the androind app here
        
        if you want to build or participate in building the ios app, feel free to contact me.  
        
        Tech stack:
        - VanillaJS
        - TMDB api
        - Firebase for Database and Authentication
        `,
        repoLink: "https://github.com/osamaakb/watch-later-web",
        demoLink: "https://osamaakb.github.io/watch-later-web"
    },
    {
        id: "3",
        title: "watch later web",
        description: "Simple website where you can keep all your movies in one place to watch later",
        story: `This website is originally a mobile app, you can find the androind app [here](https://play.google.com/store/apps/details?id=com.osama.akb.watchlater)        
        
        if you want to build or participate in building the ios app, feel free to contact me.
        
        Tech stack:
        - VanillaJS
        - TMDB api
        - Firebase for Database and Authentication
        `,
        repoLink: "https://github.com/osamaakb/watch-later-web",
        demoLink: "https://osamaakb.github.io/watch-later-web"
    }
]