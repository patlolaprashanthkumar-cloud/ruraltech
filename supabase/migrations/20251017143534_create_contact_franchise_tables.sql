/*
  # Create Contact and Franchise Submissions Tables

  ## New Tables
  
  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier for each contact submission
  - `name` (text) - Name of the person contacting
  - `email` (text) - Email address
  - `mobile` (text) - Mobile number
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Timestamp of submission
  
  ### `franchise_applications`
  - `id` (uuid, primary key) - Unique identifier for each franchise application
  - `full_name` (text) - Full name of applicant
  - `mobile` (text) - Mobile number
  - `email` (text) - Email address
  - `state` (text) - State location
  - `district` (text) - District location
  - `role` (text) - Preferred franchise role
  - `message` (text) - Optional message
  - `created_at` (timestamptz) - Timestamp of application
  
  ## Security
  - Enable RLS on both tables
  - Add policies for public insert access (for form submissions)
  - Add policies for authenticated admin access to view submissions
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create franchise_applications table
CREATE TABLE IF NOT EXISTS franchise_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  mobile text NOT NULL,
  email text NOT NULL,
  state text NOT NULL,
  district text NOT NULL,
  role text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE franchise_applications ENABLE ROW LEVEL SECURITY;

-- Policy for public to insert contact submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for public to insert franchise applications
CREATE POLICY "Anyone can submit franchise application"
  ON franchise_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for authenticated users to view contact submissions
CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for authenticated users to view franchise applications
CREATE POLICY "Authenticated users can view franchise applications"
  ON franchise_applications
  FOR SELECT
  TO authenticated
  USING (true);
