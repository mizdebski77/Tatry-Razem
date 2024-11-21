'use server'

import { createSupabaseClient, protectRoute } from '@/app/core/supabase/server'
import { getErrorMessage } from './utils';

const supabase = await createSupabaseClient()


export const signUpAction = async (formData: FormData) => {
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


export const logInAction = async (formData: FormData) => {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { auth } = supabase;

        const { error } = await auth.signInWithPassword({
            email,
            password,
        });

        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};


export const signOutAction = async () => {
    try {
        await protectRoute();

        const { auth } = supabase;

        const { error } = await auth.signOut();

        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};
