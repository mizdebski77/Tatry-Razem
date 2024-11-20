'use client';

import { useEffect, useState } from 'react';
import { AuthWrapper, Link, LinkImage, Logo, ProfileIcon, ProfileSpan, ProfileWrapper, Wrapper } from './styledNavbar';
import homeImage from '../Images/NavImages/home.svg';
import { Button, ButtonLink } from '../UI/UI';
import { createClient } from '@/app/core/supabase/client';
import profile from '../Images/NavImages/profile.svg';
import { signOut } from '@/app/(features)/(auth)/authActions';
import { User as SupabaseUser } from '@supabase/auth-js';


export default function Navigation() {
    const [user, setUser] = useState<SupabaseUser | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const supabase = createClient();
            const { data } = await supabase.auth.getUser();

            if (data?.user) {
                setUser(data.user);
            } else {
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    console.log(user);



    const handleLogout = async () => {
        const result = await signOut();

        if (!result?.error) {
            window.location.href = '/';
        } else {
            console.log(result.error);
        }
    }



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
                            <Button $background='white' text='Wyloguj' onClick={handleLogout} />
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