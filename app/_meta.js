/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    title: "Home",
    href: "/", // index route
    type: "page",
  },
  {
    title: "About",
    href: "/about",
    type: "page",
  },
  {
    title: "Docs",
    type: "menu",
    items: {
      about: {
        title: "Next Level Web Development",
        href: "/0_gettingstarted",
      },
    },
  },
];
