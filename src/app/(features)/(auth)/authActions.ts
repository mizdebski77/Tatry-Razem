'use server'

import { createClient } from '@/app/core/supabase/server'
import { revalidatePath } from 'next/cache'

const supabase = await createClient()


export async function authLogin(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.log(error.message);

        return { error: error.message };
    }

    revalidatePath('/', 'layout');
    return { success: true };
}

export async function authSignUp(email: string, password: string, name: string, surname: string) {

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name: name,
                surname: surname,
            },
        },
    });


    if (error) {
        console.log(error.message);
        return { error: error.message };
    }

    revalidatePath('/', 'layout')
    return { success: true };
}


export async function signOut() {
    const { error } = await supabase.auth.signOut()
}
