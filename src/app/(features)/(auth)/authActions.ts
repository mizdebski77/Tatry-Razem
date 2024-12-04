'use server'

import { createClient } from '@/app/core/supabase/server';
import { getErrorMessage } from './utils';


export async function LogInAction(formData: FormData) {
    const supabase = await createClient();
    try {
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        const { error } = await supabase.auth.signInWithPassword(data);

        if (error) throw error;

        return { errorMessage: null };

    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }

};


export async function SignUp(formData: FormData) {
    const supabase = await createClient()
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const name = formData.get('name') as string;
        const surname = formData.get('surname') as string;

        const { auth } = supabase;

        const { error } = await auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: name,
                    surname: surname,
                }
            }
        });

        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};

export async function SignOutAction() {
    const supabase = await createClient();

    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};

export async function updateUser(formData: FormData) {
    const supabase = await createClient();

    try {
        const email = formData.get('email') as string;
        const name = formData.get('name') as string;
        const surname = formData.get('surname') as string;
        const location = formData.get("location") as string;
        const bio = formData.get("bio") as string;
        const facebook_url = formData.get("facebook_url") as string;
        const youtube_url = formData.get("youtube_url") as string;
        const instagram_url = formData.get("instagram_url") as string;

        const { error } = await supabase.auth.updateUser({
            email: email,
            data: {
                name: name,
                surname: surname,
                bio: bio,
                location: location,
                facebook_url: facebook_url,
                youtube_url: youtube_url,
                instagram_url: instagram_url,
            }
        });


        if (error) throw error;

        return { errorMessage: null };

    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};
