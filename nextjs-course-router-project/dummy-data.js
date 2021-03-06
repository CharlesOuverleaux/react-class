const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "NFT Introduction",
    description:
      "Everyone can learn about NFT's! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with NFT's as well.",
    location: "Puggy Town",
    date: "2021-05-12",
    image: "/images/nft-intro.jpg",
    isFeatured: true,
    userPicture: "/images/pug-1.jpg",
    userName: "Pugba",
  },
  {
    id: "e2",
    title: "NFT in sports",
    description:
      "Remember collecting baseball, basketball and football cards? Let's see what the next generation is up to.",
    location: "Puglia",
    date: "2021-05-30",
    image: "/images/nft-sport.jpg",
    isFeatured: true,
    userPicture: "/images/pug-2.jpg",
    userName: "Pugsly",
  },
  {
    id: "e3",
    title: "NFT Story: Beeple",
    description:
      "Beeple is Mike Winkelmann, a graphic designer from Charleston, SC, USA who does a variety of digital artwork including short films, Creative Commons VJ loops, everydays and VR / AR work. After he began releasing a set of widely used Creative Commons VJ loops he has worked on concert visuals for Justin Bieber, One Direction, Katy Perry, Nicki Minaj, Eminem, Zedd, deadmau5 and many more. One of the originators of the current everyday movement in 3D graphics he has been creating a picture everyday from start to finish and posting it online for over ten years without missing a single day.",
    location: "The City of Bones",
    date: "2022-04-10",
    image: "/images/nft-beeple.jpg",
    isFeatured: false,
    userPicture: "/images/pug-3.jpg",
    userName: "Pugzilla",
  },
  {
    id: "e4",
    title: "NFT Introduction",
    description:
      "Everyone can learn about NFT's! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with NFT's as well.",
    location: "Puggy Town",
    date: "2021-05-12",
    image: "/images/nft-intro.jpg",
    isFeatured: false,
    userPicture: "/images/pug-1.jpg",
    userName: "Pugba",
  },
  {
    id: "e5",
    title: "NFT in sports",
    description:
      "Remember collecting baseball, basketball and football cards? Let's see what the next generation is up to.",
    location: "Puglia",
    date: "2021-06-30",
    image: "/images/nft-sport.jpg",
    isFeatured: false,
    userPicture: "/images/pug-2.jpg",
    userName: "Pugsly",
  },
  {
    id: "e6",
    title: "NFT Story: Beeple",
    description:
      "Beeple is Mike Winkelmann, a graphic designer from Charleston, SC, USA who does a variety of digital artwork including short films, Creative Commons VJ loops, everydays and VR / AR work. After he began releasing a set of widely used Creative Commons VJ loops he has worked on concert visuals for Justin Bieber, One Direction, Katy Perry, Nicki Minaj, Eminem, Zedd, deadmau5 and many more. One of the originators of the current everyday movement in 3D graphics he has been creating a picture everyday from start to finish and posting it online for over ten years without missing a single day.",
    location: "The City of Bones",
    date: "2022-07-10",
    image: "/images/nft-beeple.jpg",
    isFeatured: false,
    userPicture: "/images/pug-3.jpg",
    userName: "Pugzilla",
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
