"use client"; // Wymusza klientowe zachowanie komponentu

import React, { useState } from "react";
import {
    MobileWrapper,
    PhoneNavbar,
    Container,
    AuthWrapper,
} from "./styledMobileMenu";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, ProfileSpan, ProfileWrapper } from "../styledNavbar";
import { FaHome } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { Search } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { ButtonLink } from "../../UI/UI";
import { User } from "@supabase/supabase-js";
import { NavLinks } from "../../arrays";
import { SignOut } from "@/app/(auth)/SingOut/signOut";

interface MobileMenuProps {
    user: User | null;
}
export default function MobileMenu({ user }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const animation = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: { velocity: 100 },
                duration: 0.3,
            },
        },
        hidden: {
            x: -250,
            opacity: 0,
            transition: {
                x: { velocity: 100 },
                duration: 0.3,
            },
        },
    };

    return (
        <>
            <PhoneNavbar onClick={toggleMenu}>
                <Hamburger color="#ffffff" size={24} toggled={isOpen} />
            </PhoneNavbar>
            <AnimatePresence>
                {isOpen && (
                    <MobileWrapper
                        as={motion.div}
                        initial="hidden"
                        animate={isOpen ? "visible" : "hidden"}
                        exit="hidden"
                        variants={animation}
                    >
                        <Container>
                            {NavLinks.map((link) => (
                                <Link key={link.id} href={link.link}>
                                    <link.icon />
                                    {link.text}
                                </Link>
                            ))}
                        </Container>

                        <AuthWrapper>
                            {user ? (
                                <>
                                    <ProfileWrapper href="/Profile">
                                        <CgProfile
                                            style={{
                                                margin: "0 auto",
                                                fontSize: "24px",
                                                color: "white",
                                            }}
                                        />
                                        <ProfileSpan>
                                            {user.user_metadata.name}
                                        </ProfileSpan>
                                    </ProfileWrapper>
                                    <div>
                                        <SignOut />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <ButtonLink
                                        $background="blue"
                                        text="Zaloguj się"
                                        href="/Login"
                                    />
                                    <ButtonLink
                                        $background="white"
                                        text="Rejestracja"
                                        href="/Register"
                                    />
                                </>
                            )}
                        </AuthWrapper>
                    </MobileWrapper>
                )}
            </AnimatePresence>
        </>
    );
}
