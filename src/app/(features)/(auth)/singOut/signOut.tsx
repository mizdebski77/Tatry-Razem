'use client'

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { signOutAction } from '../authActions';
import { toast } from 'react-hot-toast';
import { Button, Loader } from '../authComponents';

export function SignOut() {
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const handleSignOut = () => {
        startTransition(async () => {
            const { errorMessage } = await signOutAction();
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                toast.success("Wylogowano pomyślnie");
                router.push("/");
            }
        });
    };

    return (
        <Button disabled={isPending} onClick={handleSignOut} > {isPending ? <Loader /> : 'Wyloguj'}</Button >
    )
}