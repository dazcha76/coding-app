import Card from '../components/Card';
import { reactSyntax } from '../data/reactSyntax';

export default function Learn() {
  return (
    <>
      <h2>Learn</h2>
      <h3>Exporting and Importing Files</h3>
      <Card
        title={reactSyntax.exports.default.title}
        code={reactSyntax.exports.default.code}
      />
      <Card
        title={reactSyntax.exports.named.title}
        code={reactSyntax.exports.named.code}
      />
    </>
  );
}
