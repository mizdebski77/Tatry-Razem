import { redirect } from 'next/navigation';
import { Button } from '../authComponents';
import { createClient } from '@/app/core/supabase/server';

export function SignOut() {
    const Logout = async () => {
        'use server';

        const supabase = await createClient();

        const { error } = await supabase.auth.signOut();

        if (error) {
            redirect('/error.message');
        } else {
            redirect('/');
        }
    };

    return (
        <Button onClick={Logout}>
            Wyloguj
        </Button>
    );
}
