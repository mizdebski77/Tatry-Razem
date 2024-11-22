'use client';

import { Header, HeaderTitle, Wrapper } from './styledProfile';
import { createSupabaseClient } from '@/app/core/supabase/client';
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

function PrivatePage() {

    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Profil użytkownika</HeaderTitle>
            </Header>
        </Wrapper>
    );
}

export default PrivatePage;
