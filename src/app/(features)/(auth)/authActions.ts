import { createClient } from "@/app/core/subabase/client";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function authLogin(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log(error);
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}