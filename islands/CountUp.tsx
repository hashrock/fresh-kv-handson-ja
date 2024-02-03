// Document https://fresh.deno.dev/docs/concepts/islands

interface CountUpProps {
  value: number
}

export default function CountUp(props: CountUpProps) {
  const value = props.value;
  const chars = value.toString().split("");

  return (
    <div>
      {chars.map((char, index) => (
        <span
          style="border: 1px solid black; padding: 5px; margin: 5px;"
          key={index}>{char}</span>
      ))}
    </div>
  );
}