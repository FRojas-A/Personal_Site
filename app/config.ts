const links = {
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/FRojas-A",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/frojas-uh/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/frojas.photos/",
    },
    {
      name: "email",
      url: "frankrojas215@gmail.com",
    },
  ],
  otherLinks: [
    {
      name: "Etsy",
      url: "https://www.etsy.com/shop/RojasConcepts",
    },
  ],
};

export type Links = {
  name: string;
  url: string;
};

export default links;
export const { socials, otherLinks } = links;
