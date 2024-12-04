import {
    AuthWrapper,
    Container,
    Link,
    Logo,
    LogoImg,
    ProfileSpan,
    ProfileWrapper,
    Wrapper,
} from "./styledNavbar";
import { ButtonLink } from "../UI/UI";
import { SignOut } from "@/app/(features)/(auth)/SingOut/signOut";
import { createClient } from "@/app/core/supabase/server";
import logo from "../Images/logo.png";
import { CgProfile } from "react-icons/cg";
import MobileMenu from "./MobileMenu/mobileMenu";
import { NavLinks } from "../arrays";

export default async function Navigation() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    return (
        <Wrapper>
            <Logo href="/">
                <LogoImg src={logo.src} alt="logo" />
                Tatry Razem
            </Logo>

            <Container>
                {NavLinks.map((link) => (
                    <Link key={link.id} href={link.link}>
                        <link.icon />
                        {link.text}
                    </Link>
                ))}
            </Container>

            <AuthWrapper>
                {data.user ? (
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
                                {data.user?.user_metadata.name}
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
            <MobileMenu user={data?.user} />
        </Wrapper>
    );
}
