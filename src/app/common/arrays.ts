import { FaFacebook } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { Search } from "lucide-react";

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

export const EditInputs = [
    { id: 1, required: false, text: '', placeholder: 'Imię', name: 'name', type: 'text', component: 'input' },
    { id: 2, required: false, text: '', placeholder: 'Nazwisko', name: 'surname', type: 'text', component: 'input' },
    { id: 3, required: false, text: '', placeholder: 'E-Mail', name: 'email', type: 'email', component: 'input' },
    { id: 4, required: false, text: '', placeholder: 'Miejscowość', name: 'location', type: 'text', component: 'input' },
    { id: 5, required: false, text: '', placeholder: 'Opisz siebie', name: 'bio', type: 'text', component: 'textarea' },
];

export const SocialInputs = [
    { id: 6, icon: FaFacebook, placeholder: 'Facebook link', name: 'facebook_url', type: 'text', },
    { id: 7, icon: BsYoutube, placeholder: 'YouTube link', name: 'youtube_url', type: 'text', },
    { id: 8, icon: RiInstagramFill, placeholder: 'Instagram link', name: 'instagram_url', type: 'text', },
];

export const SocialLinks = [
    { id: 1, url: 'https://www.facebook.com/?locale=pl_PL' },
    { id: 2, url: 'youtube.com' },
    { id: 3, url: 'https://www.instagram.com/raynavallandingham/' },
];

export const NavLinks = [
    { id: 1, link: '/', icon: FaHome, text: 'Strona główna' },
    { id: 2, link: '/', icon: MdAdd, text: 'Dodaj propozycję' },
    { id: 3, link: '/', icon: Search, text: 'Znajdź propzycję' },
];