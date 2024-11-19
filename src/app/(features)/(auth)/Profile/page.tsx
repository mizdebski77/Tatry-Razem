import { createClient } from '@/app/core/supabase/server'
import { redirect } from 'next/navigation'


export default async function PrivatePage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return <p style={{ margin: '200px' }}>Cześć {data.user.user_metadata.name}</p>
}