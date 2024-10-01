import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseClient';

export async function POST(req: Request) {
    try {
        const { name, email, ...otherFields } = await req.json();

        if (!name || !email) {
            return NextResponse.json({ error: 'Missing required fields: name and email are mandatory' }, { status: 400 });
        }

        const { data, error } = await supabase
            .from('registration')
            .insert([{ name, email, ...otherFields }]);

        if (error) {
            console.error('Supabase insert error:', error);
            return NextResponse.json({ error: 'Database insertion failed', details: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json({ 
            error: 'Internal server error', 
            details: error instanceof Error ? error.message : 'Unknown error occurred' 
        }, { status: 500 });
    }
}
