'use client'

import { createClient } from '@/app/core/supabase/server'
import { redirect } from 'next/navigation'
import { Header, HeaderTitle, Wrapper } from './styledProfile'


export default async function PrivatePage() {
    // const supabase = await createClient()

    // const { data, error } = await supabase.auth.getUser()
    // if (error || !data?.user) {
    //     redirect('/login')
    // }

    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Profil użytkownika</HeaderTitle>
            </Header>

        </Wrapper>
    )
}