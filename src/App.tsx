import Card from './components/Card';
import { reactSyntax } from './reactSyntax';

function App() {
  return (
    <>
      <h1>Side By Side Code</h1>

      <h2>Exporting and Importing Files</h2>

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

export default App;
