import Card from '../components/Card';
import { reactSyntax } from '../data/react/reactSyntax';

export default function HowTo() {
  return (
    <>
      <h2>How To</h2>
      <h3>Exporting and Importing Files</h3>
      <div className="two-columns">
        <div>
          <Card
            title={reactSyntax.exports.default.title}
            code={reactSyntax.exports.default.code}
          />
        </div>
        <div>
          <Card
            title={reactSyntax.exports.named.title}
            code={reactSyntax.exports.named.code}
          />
        </div>
      </div>
    </>
  );
}
