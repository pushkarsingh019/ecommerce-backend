import {v4 as uuid} from "uuid"

export const categories = [
    {
      _id: uuid(),
      categoryName: "Laptops",
      description: "Your portable companion for conquering the digital realm with elegance and power.",
      image : "https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m1__mfge6fbp7t2m_medium_2x.jpg",
    },
    {
      _id: uuid(),
      categoryName: "Smartphones",
      description: "The pocket-sized marvels that keep you connected, informed, and infinitely stylish.",
      image : "https://www.apple.com/v/iphone/home/bo/images/overview/hero/hero_iphone_14__de41900yuggi_medium_2x.jpg",
    },
    {
      _id: uuid(),
      categoryName: "Tablets",
      description: "Sleek and intuitive touchscreens, bridging the gap between productivity and entertainment.",
      image : "https://www.apple.com/v/ipad/home/cf/images/overview/compare_ipad_pro__erf9x8mw04sy_large_2x.png"
    },
    {
      _id: uuid(),
      categoryName: "Desktops",
      description: "The mighty workhorses that sit atop your desk, empowering your ambitions and creativity.",
      image : "https://www.apple.com/v/imac-24/h/images/overview/color_front_green__eb8qbnemmre6_large_2x.jpg",  
    },
    {
      _id: uuid(),
      categoryName: "Gaming Consoles",
      description: "Unleash the realm of gaming and immerse yourself in worlds of epic adventures.",
      image : "https://gmedia.playstation.com/is/image/SIEPDC/Controller-XL@2x?fmt=png-alpha&scl=1",
    },
    {
      _id: uuid(),
      categoryName: "Cameras",
      description: "Capture moments in timeless frames, freezing memories with the click of a button.",
      image : "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      _id: uuid(),
      categoryName: "Headphones",
      description: "Indulge in pure auditory bliss as you immerse yourself in melodies from another dimension.",
      image : "https://cdn.shopify.com/s/files/1/0690/2566/1222/products/PikPng.com_martin-garrix-png_4868979.jpg?v=1671562271&width=1000"
    },
    {
        _id : uuid(),
        categoryName : "Displays",
        description : "A big life needs a bigger screen..",
        image : "https://www.apple.com/v/studio-display/b/images/overview/pairs/hw_studio_display__ej5tuii2c9iu_medium_2x.jpg"
    }
    // add more categories as needed...
];