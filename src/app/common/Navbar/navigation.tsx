import { AuthWrapper, Link, LinkImage, Logo, ProfileIcon, ProfileSpan, ProfileWrapper, Wrapper } from './styledNavbar';
import homeImage from '../Images/NavImages/home.svg';
import { ButtonLink } from '../UI/UI';
import profile from '../Images/NavImages/profile.svg';
import { SignOut } from '@/app/(features)/(auth)/singOut/signOut';
import { getUser } from '@/app/core/supabase/server';

export default async function Navigation() {

    const user = await getUser();


    return (
        <Wrapper>
            <Logo href='/'>CHwG</Logo>
            <Link href='/'>
                <LinkImage src={homeImage.src} alt='Link' />
                Strona Główna
            </Link>

            <AuthWrapper>
                {user ? (
                    <>
                        <ProfileWrapper href='/Profile'>
                            <ProfileIcon src={profile.src} alt='profile' />
                            <ProfileSpan>{user.user_metadata?.name ?? 'Użytkownik'}</ProfileSpan>
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

