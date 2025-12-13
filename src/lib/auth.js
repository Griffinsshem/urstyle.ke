import { supabase } from "./supabaseClient";

/* LOGIN */
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

/* REGISTER */
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

/* LOGOUT */
export async function signOut() {
  await supabase.auth.signOut();
}

/* GET SESSION */
export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}
