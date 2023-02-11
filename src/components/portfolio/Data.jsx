import Website from "../../assest/portfolio/website.jpg";
import Portfolio from "../../assest/portfolio/portfolio.jpg";
import Crypto from "../../assest/portfolio/crypto.jpg";

export const projectsData = [
    {
        id: 1 ,
        image : Website,
        title: 'website',
        category : 'web',
        link: "https://flare-global-soft.vercel.app/",
    },
    {
        id: 2 ,
        image : Portfolio,
        title: 'Personal Portfolio website',
        category : 'web',
        link: "https://prajwalmandlik.github.io/Portfolio-website/",
    },
    {
        id: 3 ,
        image : Crypto,
        title: 'Crypto website',
        category : 'web',
        link: "https://crypto-scout.vercel.app/",
    },
];

export const projectsNav = [
    {
        name: 'all' ,
    },
    {
        name: 'web' ,
    },
    {
        name: 'app' ,
    },
    {
        name: 'graphic' ,
    },
]