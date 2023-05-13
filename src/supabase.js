import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fcdquvptcssdyscxwtrv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZHF1dnB0Y3NzZHlzY3h3dHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0NTcwNTAsImV4cCI6MTk5OTAzMzA1MH0.dWsawBNRFFvPOGaTXsgP55BOkz2ykyQ5R2mAZSAHgP4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
