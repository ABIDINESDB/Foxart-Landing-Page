import { Container } from "../container";

export default function Heading({ title, subtilte }) {
  return (
    <Container className="py-5 lg:py-10">
      <div className="caption-1 text-n-5 text-center uppercase">{title}</div>
      <h2 className="h2 text-center">{subtilte}</h2>
    </Container>
  );
}
