// Document https://fresh.deno.dev/docs/concepts/routes#handler-route

import { FreshContext, Handlers } from "$fresh/server.ts";
const kv = await Deno.openKv();

export const handler: Handlers = {
  async POST(req: Request, _ctx: FreshContext) {
    const form = await req.formData();
    const amount = Number(form.get("amount"))
    const res = await kv.set(["amount"], amount);
    return new Response("Success");
  },
};

export default function Update() {
  return <div>
    <form action="/update" method="post">
      <input type="number" name="amount" />
      <button type="submit">Submit</button>
    </form>
  </div>;
}