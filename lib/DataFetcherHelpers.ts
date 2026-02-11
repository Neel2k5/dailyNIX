import { supabaseClient } from "./SupabaseClient";

export async function getCommandById(id: number) {
  const { data, error } = await supabaseClient
    .from("command_list")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching command:", error);
    return null;
  }
  return data;
}
export const getCommandCount = async () => {
  const { count, error } = await supabaseClient
    .from("command_list")
    .select("*", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
};
export async function testSupabase() {
  const { data, error } = await supabaseClient
    .from("command_list")
    .select("*")
    .eq("id", 1);

  if (error) console.error(error);
  else console.log(data);
}