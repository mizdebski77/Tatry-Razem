'use server'

import { createClient } from '@/app/core/supabase/server';
import { redirect } from 'next/navigation';
import { getErrorMessage } from './utils';


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


export async function SignUp(formData: FormData) {
    const supabase = await createClient()
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { auth } = supabase;

        const { error } = await auth.signUp({
            email,
            password,
        });

        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};

