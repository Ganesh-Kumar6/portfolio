const headerContents = {
    title: "Ganesh Kumar",
    logo: {
        src: "/profile.jpg",
        alt: "profile",
    },
    links: [
        {
            item: "Home",
            to: "/",
            linkType: "internal",
            position: "right",
        },
        {
            item: "Projects",
            to: "/projects",
            linkType: "internal",
            position: "right",
        },
        {
            item: "Blogs",
            to: "https://mvganeshkumar.hashnode.dev/",
            linkType: "external",
            position: "right",
        },
        {
            item: "Resume",
            to: "/resume",
            linkType: "internal",
            position: "right",
        },
    ]
};

const sidebarContents = {

};

const footerContents = {
    title: "Ganesh Kumar",
    logo: {
        src: "/profile.jpg",
        alt: "profile",
    },
    links: [
        {
            title: "Social",
            items: [
                {
                    item: "Github",
                    to: "https://github.com/mvganeshkumar06",
                    linkType: "external",
                },
                {
                    item: "LinkedIn",
                    to: "https://linkedin.com/in/mvganeshkumar06",
                    linkType: "external",
                },
                {
                    item: "Twitter",
                    to: "https://twitter.com/mvganeshkumar06",
                    linkType: "external",
                }
            ]
        }
    ],
    copyright: "Copyright © 2021. All Rights Reserved. 🙂"
};

export { headerContents, sidebarContents, footerContents };