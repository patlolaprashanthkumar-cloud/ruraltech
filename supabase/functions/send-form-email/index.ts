import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
  formType: 'contact';
}

interface FranchiseFormData {
  fullName: string;
  mobile: string;
  email: string;
  state: string;
  district: string;
  role: string;
  message: string;
  formType: 'franchise';
}

type FormData = ContactFormData | FranchiseFormData;

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const formData: FormData = await req.json();

    if (formData.formType === 'contact') {
      const { name, email, mobile, message } = formData;

      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{ name, email, mobile, message }]);

      if (dbError) throw dbError;

      const emailBody = `
New Contact Form Submission
============================

Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}

---
Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
From: Rural Tech Store Services Website
      `;

      console.log('Contact form submission received:', { name, email, mobile });

      await fetch('https://formsubmit.co/ajax/ruraltechstore@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Contact Form Submission - Rural Tech Store',
          name,
          email,
          mobile,
          message,
          _template: 'table',
        }),
      });

      console.log('Email sent to: ruraltechstore@gmail.com');

    } else if (formData.formType === 'franchise') {
      const { fullName, mobile, email, state, district, role, message } = formData;

      const { error: dbError } = await supabase
        .from('franchise_applications')
        .insert([{ full_name: fullName, mobile, email, state, district, role, message }]);

      if (dbError) throw dbError;

      const emailBody = `
New Franchise Application
=========================

Full Name: ${fullName}
Mobile: ${mobile}
Email: ${email}
State: ${state}
District: ${district}
Preferred Role: ${role}

Message:
${message || 'No message provided'}

---
Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
From: Rural Tech Store Services Website
      `;

      console.log('Franchise application received:', { fullName, email, mobile, role });

      await fetch('https://formsubmit.co/ajax/ruraltechstore@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Franchise Application - Rural Tech Store',
          'Full Name': fullName,
          'Mobile': mobile,
          'Email': email,
          'State': state,
          'District': district,
          'Preferred Role': role,
          'Message': message || 'No message provided',
          _template: 'table',
        }),
      });

      console.log('Email sent to: ruraltechstore@gmail.com');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Error processing form:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});