import {v4 as uuid} from "uuid"

export const categories = [
    {
      _id: uuid(),
      categoryName: "Laptops",
      description: "Your portable companion for conquering the digital realm with elegance and power.",
    },
    {
      _id: uuid(),
      categoryName: "Smartphones",
      description: "The pocket-sized marvels that keep you connected, informed, and infinitely stylish.",
    },
    {
      _id: uuid(),
      categoryName: "Tablets",
      description: "Sleek and intuitive touchscreens, bridging the gap between productivity and entertainment.",
    },
    {
      _id: uuid(),
      categoryName: "Desktops",
      description: "The mighty workhorses that sit atop your desk, empowering your ambitions and creativity.",
    },
    {
      _id: uuid(),
      categoryName: "Gaming Consoles",
      description: "Unleash the realm of gaming and immerse yourself in worlds of epic adventures.",
    },
    {
      _id: uuid(),
      categoryName: "Cameras",
      description: "Capture moments in timeless frames, freezing memories with the click of a button.",
    },
    {
      _id: uuid(),
      categoryName: "Headphones",
      description: "Indulge in pure auditory bliss as you immerse yourself in melodies from another dimension.",
    },
    {
        _id : uuid(),
        categoryName : "Other",
        description : "All other tech products you love",
    }
    // add more categories as needed...
];