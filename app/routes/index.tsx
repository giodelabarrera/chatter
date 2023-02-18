import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase.server";
import Login from "components/login";

export const loader = async () => {
  const { data: messages } = await supabase.from("messages").select();
  return messages;
};

export default function Index() {
  const messages = useLoaderData<typeof loader>();
  return (
    <>
      <Login />
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </>
  );
}
