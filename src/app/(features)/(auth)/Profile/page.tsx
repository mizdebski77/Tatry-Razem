'use client';
import { createClient } from '@/app/core/supabase/client';
import { Header, HeaderTitle, Wrapper } from './styledProfile';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Loader } from '@/app/common/Loader/loader';
import { FetchError } from '@/app/common/Error/error';

export default function Profile() {
    const [file, setFile] = useState('');

    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const supabase = createClient();
            const { data, error } = await supabase.auth.getUser();
            if (error || !data?.user) {
                throw new Error('User not found');
            }
            return data.user;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <FetchError />
    }

    console.log(file);


    return (
        <Wrapper>
            <Header>
                <HeaderTitle>
                    Profil użytkownika {user?.user_metadata?.name || 'Nieznany'}
                </HeaderTitle>
            </Header>
            <input onChange={(e) => setFile(e.target.value)} type="file" />
        </Wrapper>
    );
}
