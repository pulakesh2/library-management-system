import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gjcokbobxzdihltgvzqn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqY29rYm9ieHpkaWhsdGd2enFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MzgyMjQsImV4cCI6MjA2NzAxNDIyNH0.f_-KcJsT2QtzOKg-K4dZq8a1R_yDhYkgUYxpE4lPsnE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
