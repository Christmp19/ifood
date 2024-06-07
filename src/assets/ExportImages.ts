import Service1 from './serv-1.png';
import Service2 from './serv-2.png';
import Service3 from './serv-3.png';
import Service4 from './serv-4.png';
import Menu1 from './menu-1.png';
import Menu2 from './menu-2.png';
import Menu3 from './menu-3.png';
import Menu4 from './menu-4.png';
import Menu5 from './menu-5.png';
import Menu6 from './menu-6.png';
import foodImg1 from "./food-1.png";
import foodImg2 from "./food-2.png";
import foodImg3 from "./food-3.png";
import foodImg4 from "./food-4.png";
import foodImg5 from "./food-5.png";
import foodImg6 from "./food-6.png";
import foodImg7 from "./food-7.png";
import foodImg8 from "./food-8.png";
import BlogImg1 from './blog-1.jpg';
import BlogImg2 from './blog-2.jpg';
import BlogImg3 from './blog-3.jpg';
import Icon1 from "./icon-1.png";
import Icon2 from "./icon-2.png";
import Icon3 from "./icon-3.png";


export const ServiceImages = [
    {
        alt: 'Service 1',
        src: Service1,
        title: 'Livraison Rapide',
    },
    {
        alt: 'Service 2',
        src: Service2,
        title: 'Aliments Frais',
    },
    {
        alt: 'Service 3',
        src: Service3,
        title: 'Meilleure Qualité',
    },
    {
        alt: 'Service 4',
        src: Service4,
        title: 'Assistance 24h/7',
    },
]

export const menuItems = [
    {
        src: Menu1,
        alt: "Menu Img 1",
        title: "Burger Nugget",
        price: "2500frs"
    },
    {
        src: Menu2,
        alt: "Menu Img 2",
        title: "Pizza aux Olives ",
        price: "3500frs"
    },
    {
        src: Menu3,
        alt: "Menu Img 3",
        title: "Tacos ",
        price: "5000frs"
    },
    {
        src: Menu4,
        alt: "Menu Img 4",
        title: "Sandwich Jambon",
        price: "4500frs"
    },
    {
        src: Menu5,
        alt: "Menu Img 5",
        title: "Frites ",
        price: "4500frs"
    },
    {
        src: Menu6,
        alt: "Menu Img 6",
        title: "Pizza Reine",
        price: "4500frs"
    },
];

interface FoodItem {
    id: number;
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    stars: number;
    reviews: number;
}

export const foodItems: FoodItem[] = [
    {
        id: 1,
        name: "Samoussa",
        image: foodImg1,
        price: 2000,
        oldPrice: 2500,
        stars: 4.5,
        reviews: 50,
    },
    {
        id: 2,
        name: "Burger",
        image: foodImg2,
        price: 2000,
        oldPrice: 3500,
        stars: 4.5,
        reviews: 50,
    },
    {
        id: 3,
        name: "Pizza Reine",
        image: foodImg3,
        price: 2000,
        oldPrice: 4500,
        stars: 4.5,
        reviews: 50,
    },
    {
        id: 4,
        name: "Burger Royal",
        image: foodImg4,
        price: 3000,
        oldPrice: 4500,
        stars: 4.5,
        reviews: 50,
    },
    {
        id: 5,
        name: "Pizza Margherita",
        image: foodImg5,
        price: 2000,
        oldPrice: 2500,
        stars: 4.5,
        reviews: 50,
    },
    {
        id: 6,
        name: "Pizza aux Olives",
        image: foodImg6,
        price: 3000,
        oldPrice: 3500,
        stars: 4.5,
        reviews: 50,
    },
    {
        id: 7,
        name: "Double Burger",
        image: foodImg7,
        price: 3000,
        oldPrice: 3500,
        stars: 4.5,
        reviews: 50,
    },
    {
        id: 8,
        name: "Pizza aux Saucisses",
        image: foodImg8,
        price: 3000,
        oldPrice: 3500,
        stars: 4.5,
        reviews: 50,
    },
];
interface BlogItem {
    id: number;
    date: string;
    image: string;
    tags: string[];
    title: string;
    content: string;
}

export const blogItems: BlogItem[] = [
    {
        id: 1,
        date: '21st May, 2021',
        image: BlogImg1,
        tags: ['food', 'burger', 'pizza'],
        title: 'Blog title goes here...',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.'
    },
    {
        id: 2,
        date: '21st May, 2021',
        image: BlogImg2,
        tags: ['food', 'burger', 'pizza'],
        title: 'Blog title goes here...',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.'
    },
    {
        id: 3,
        date: '21st May, 2021',
        image: BlogImg3,
        tags: ['food', 'burger', 'pizza'],
        title: 'Blog title goes here...',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.'
    }
];

export const OrderItems = [
    {
        id: 1,
        src: Icon1,
        alt: "time",
        title: "7:00am to 10:30pm",
    },
    {
        id: 2,
        src: Icon2,
        alt: "phone",
        title: "+33 123 456 789",
    },
    {
        id: 3,
        src: Icon3,
        alt: "location",
        title: "56, rue de Paris, 75016 Paris",
    },
]

export const FooterItemsLinks = [
    {
        id: 1,
        title: "our menu",
        links: [
            {
                id: 1,
                name: "pizza",
                href: "#autre"
            },
            {
                id: 2,
                name: "burger",
                href: "#autre"
            },
            {
                id: 3,
                name: "chicken",
                href: "#autre"
            },
            {
                id: 4,
                name: "pasta",
                href: "#autre"
            },
            {
                id: 5,
                name: "and more...",
                href: "#autre"
            },
        ]
    },
    {
        id: 2,
        title: "quick linkss",
        links: [
            {
                id: 1,
                name: "home",
                href: "#home"
            },
            {
                id: 2,
                name: "about",
                href: "#about"
            },
            {
                id: 3,
                name: "popular",
                href: "#popular"
            },
            {
                id: 4,
                name: "menu",
                href: "#menu"
            },
            {
                id: 5,
                name: "order",
                href: "#order"
            },
            {
                id: 6,
                name: "blogs",
                href: "#blog"
            },
        ]
    },
    {
        id: 3,
        title: "extra linkss",
        links: [
            {
                id: 1,
                name: "my order",
                href: "#autre"
            },
            {
                id: 2,
                name: "my account",
                href: "#autre"
            },
            {
                id: 3,
                name: "my favorite",
                href: "#autre"
            },
            {
                id: 4,
                name: "terms of use",
                href: "#autre"
            },
            {
                id: 5,
                name: "privacy policy",
                href: "#autre"
            },
        ]
    },
]

export const FooterItemsDays = [
    {
        id: 1,
        title: "opening hours",
        days: [
            {
                id: 1,
                day: "monday",
                hour: "7:00am to 10:30pm",
            },
            {
                id: 2,
                day: "tuesday",
                hour: "7:00am to 10:30pm",
            },
            {
                id: 3,
                day: "wednesday",
                hour: "7:00am to 10:30pm",
            },
            {
                id: 4,
                day: "friday",
                hour: "7:00am to 10:30pm",
            },
            {
                id: 5,
                day: "saturday and sunday",
                hour: "closed",
            },
        ]
    },
]
