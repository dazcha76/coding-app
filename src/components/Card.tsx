type CardProps = {
  title: string;
  code: string;
};

export default function Card({ title, code }: CardProps) {
  return (
    <>
      <h3>{title}</h3>
      <pre>
        <code>{code}</code>
      </pre>
    </>
  );
}
