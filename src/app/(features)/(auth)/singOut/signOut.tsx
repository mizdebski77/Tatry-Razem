import { redirect } from 'next/navigation';
import { Button } from '../authComponents';
import { createClient } from '@/app/core/supabase/server';
import { toast } from "react-hot-toast";

export function SignOut() {
    const Logout = async () => {
        'use server';

        const supabase = await createClient();

        const { error } = await supabase.auth.signOut();

        if (error) {
            redirect('/error.message');
        } else {
            toast.success("Wylogowano pomyślnie");
            redirect('/');
        }
    };

    return (
        <Button onClick={Logout}>
            Wyloguj
        </Button>
    );
}
