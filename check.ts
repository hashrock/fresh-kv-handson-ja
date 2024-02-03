const db = await Deno.openKv()

console.log(await db.set(["amount"], 120))

// console.log(await db.get(["amount"]))