import instagram from './Images/Socials/instagram.svg';
import facebook from './Images/Socials/facebook.svg';
import youtube from './Images/Socials/youtube.svg';


export const HowItWorks = [
    { number: 1, text: 'Logujesz się na swoje konto' },
    { number: 2, text: 'Szukasz propzycji która cię interersuje' },
    { number: 3, text: 'Kontaktujesz się i dogadujesz szczegóły' },
];

export const SocialLinks = [
    { id: 1, alt: 'Instagram', img: instagram },
    { id: 2, alt: 'Facebook', img: facebook },
    { id: 3, alt: 'YouTube', img: youtube },
];

export const FooterLinks = [
    {
        id: 1,
        title: 'Mapa Strony',
        links: [
            { link: 'http://localhost:3000/', name: 'Link 1', id: 1 },
            { link: 'http://localhost:3000/', name: 'Link 2', id: 2 },
            { link: 'http://localhost:3000/', name: 'Link 3', id: 3 },
            { link: 'http://localhost:3000/', name: 'Link 4', id: 4 },
            { link: 'http://localhost:3000/', name: 'Link 5', id: 5 }
        ]
    },

    {
        id: 2,
        title: 'Mapa Strony 2',
        links: [
            { link: 'http://localhost:3000/', name: 'Link 7', id: 7 },
            { link: 'http://localhost:3000/', name: 'Link 8', id: 8 },
            { link: 'http://localhost:3000/', name: 'Link 9', id: 9 },
            { link: 'http://localhost:3000/', name: 'Link 10', id: 10 },
            { link: 'http://localhost:3000/', name: 'Link 11', id: 11 }
        ]
    },
];


export const RegisterInputs = [
    { id: 1, required: false, text: 'Niepoprawny Format', placeholder: 'Imię *', name: 'name', type: 'name', },
    { id: 2, required: false, text: 'Niepoprawny Format', placeholder: 'Nazwisko *', name: 'surname', type: 'name', },
    { id: 3, required: false, text: 'Niepoprawny E-mail', placeholder: 'E-mail *', name: 'email', type: 'email', },
    { id: 4, required: false, text: 'Niepoprawne Hasło', placeholder: 'Hasło *', name: 'password', type: 'password', },
    { id: 5, required: false, text: 'Hasła nie są identyczne', placeholder: 'Powtórz hasło', name: 'rpassword', type: 'password', },
    { id: 6, required: false, text: 'Niepoprawna nazwa miejscowości', placeholder: 'Wpisz miejscowość', name: 'location', type: 'text', },

];