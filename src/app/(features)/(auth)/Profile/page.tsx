'use client';

import { Header, HeaderTitle, Wrapper } from './styledProfile';
import { createSupabaseClient } from '@/app/core/supabase/client';
import { useState } from 'react';
import { User } from '@supabase/supabase-js';

function PrivatePage() {

    const [user, setUser] = useState<User | null>(null);

    const { auth } = createSupabaseClient();

    auth.onAuthStateChange((event, session) => {
        setUser(session?.user || null);
    });

    console.log(user);


    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Profil użytkownika{user?.email}</HeaderTitle>
            </Header>
        </Wrapper>
    );
}

export default PrivatePage;
