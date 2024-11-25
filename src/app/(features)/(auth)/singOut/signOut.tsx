'use client'
import { Button, Loader } from '../authComponents';
import { toast } from "react-hot-toast";
import { useTransition } from 'react';
import { useRouter } from "next/navigation";
import { SignOutAction } from '../authActions';

export function SignOut() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSignOut = () => {
        startTransition(async () => {
            const { errorMessage } = await SignOutAction();
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                router.push("/");
                toast.success("Wylogowano pomyślnie");
            }
        })
    }
    // const Logout = async () => {
    //     'use server';

    //     const supabase = await createClient();

    //     const { error } = await supabase.auth.signOut();

    //     if (error) {
    //         redirect('/error.message');
    //     } else {
    //         toast.success("Wylogowano pomyślnie");
    //         redirect('/');
    //     }
    // };

    return (
        <Button onClick={handleSignOut}>
            {isPending ? <Loader /> : 'Wyloguj'}
        </Button>
    );
}
