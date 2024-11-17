'use server'

import { createClient } from '@/app/core/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const supabase = await createClient()


export async function authLogin(formData: FormData) {

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log(error);

    }

    revalidatePath('/', 'layout')
    redirect('/')
};

export async function authSignUp(formData: FormData) {

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,

    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        console.log(error.message);
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
};

export async function signOut() {
    const { error } = await supabase.auth.signOut()
}
