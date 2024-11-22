'use server'

import { createClient } from '@/app/core/supabase/server';
import { redirect } from 'next/navigation';


export async function LogInAction(formData: FormData) {
    const supabase = await createClient();

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        console.log(error.message);
    };

    redirect('/Profile');
};


export async function signup(formData: FormData) {
    const supabase = await createClient()
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    redirect('/Profile')
};