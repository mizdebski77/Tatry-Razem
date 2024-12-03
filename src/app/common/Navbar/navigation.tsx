import { AuthWrapper, Link, LinkImage, Logo, LogoImg, ProfileIcon, ProfileSpan, ProfileWrapper, Wrapper } from './styledNavbar';
import homeImage from '../Images/NavImages/home.svg';
import { ButtonLink } from '../UI/UI';
import profile from '../Images/NavImages/profile.svg';
import { SignOut } from '@/app/(features)/(auth)/SingOut/signOut';
import { createClient } from '@/app/core/supabase/server';
import logo from '../Images/logo.png';

export default async function Navigation() {

    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()


    return (
        <Wrapper>
            <Logo href='/'>
                <LogoImg src={logo.src} alt='logo' />
                Tatry Razem
            </Logo>
            <Link href='/'>
                <LinkImage src={homeImage.src} alt='Link' />
                Strona Główna
            </Link>

            <AuthWrapper>
                {data.user ? (
                    <>
                        <ProfileWrapper href='/Profile'>
                            <ProfileIcon src={profile.src} alt='profile' />
                            <ProfileSpan>{data.user?.user_metadata.name}</ProfileSpan>
                        </ProfileWrapper>
                        <div>
                            <SignOut />
                        </div>
                    </>
                ) : (
                    <>
                        <ButtonLink $background='blue' text='Zaloguj się' href='/Login' />
                        <ButtonLink $background='white' text='Rejestracja' href='/Register' />
                    </>
                )}
            </AuthWrapper>
        </Wrapper>
    );
}

