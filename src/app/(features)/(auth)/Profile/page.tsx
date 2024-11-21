

import { Header, HeaderTitle, Wrapper } from './styledProfile'
import { getUser } from '@/app/core/supabase/server'


export default async function PrivatePage() {

    const user = await getUser();

    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Profil użytkownika{user?.email}</HeaderTitle>
            </Header>

        </Wrapper>
    )
}