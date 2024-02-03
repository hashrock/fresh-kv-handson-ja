import CountUp from "../islands/CountUp.tsx";

export default async function Home() {
  const db = await Deno.openKv()
  const amount = await db.get(["amount"])
 
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap" rel="stylesheet"></link>
      <style>
        {`
        h1 {
          font-family: 'Yuji Syuku', sans-serif;
          font-size: 50px;
        }
      `}
      </style>
      <h1>春までに
        <CountUp value={amount.value} />
      kg痩せる</h1>
    </div>
  );
}
