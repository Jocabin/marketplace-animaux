import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getAllProducts() {
        return supabase
                .from('products')
                .select()
}

export type Product = {
        id: number,
        name: string,
        description: string,
        price: number,
        brand: string,
        state: string,
        img: string,
        slug: string
}