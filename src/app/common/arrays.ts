import instagram from './Images/Socials/instagram.svg';
import facebook from './Images/Socials/facebook.svg';
import youtube from './Images/Socials/youtube.svg';


export const HowItWorks = [
    { number: 1, text: 'Logujesz się na swoje konto' },
    { number: 2, text: 'Szukasz propzycji która cię interersuje' },
    { number: 3, text: 'Kontaktujesz się i dogadujesz szczegóły' },
];


export const FooterLinks = [
    {
        id: 1,
        title: 'Mapa Strony',
        links: [
            { link: 'http://localhost:3000/', name: 'Strona Główna', id: 1 },
            { link: 'http://localhost:3000/', name: 'Dodaj propozycję', id: 2 },
            { link: 'http://localhost:3000/', name: 'Szukaj wycieczki', id: 3 },
        ]
    },
];


export const RegisterInputs = [
    { id: 1, required: false, text: 'Niepoprawny Format', placeholder: 'Imię *', name: 'name', type: 'name', },
    { id: 2, required: false, text: 'Niepoprawny Format', placeholder: 'Nazwisko *', name: 'surname', type: 'name', },
    { id: 3, required: false, text: 'Niepoprawny E-mail', placeholder: 'E-mail *', name: 'email', type: 'email', },
    { id: 4, required: false, text: 'Niepoprawne Hasło', placeholder: 'Hasło *', name: 'password', type: 'password', },
    { id: 5, required: false, text: 'Hasła nie są identyczne', placeholder: 'Powtórz hasło', name: 'rpassword', type: 'password', },
];