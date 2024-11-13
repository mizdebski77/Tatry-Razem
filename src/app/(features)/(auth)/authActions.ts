
'use server'

import { createClient } from "../../core/subabase/server";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function authLogin(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log(error.message);
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}
