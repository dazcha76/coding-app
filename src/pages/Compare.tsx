import { javaScriptSyntax } from '../data/javaScriptSyntax';
import { reactSyntax } from '../data/reactSyntax';

export default function Compare() {
  return (
    <>
      <h2>Compare</h2>

      <h3>Click events in JavaScript vs. React</h3>

      <div className="columns">
        <div>
          <h3>JavaScript</h3>
          <ul>
            <li>{javaScriptSyntax.clickEvents.step1}</li>
            <li>{javaScriptSyntax.clickEvents.step2}</li>
            <li>{javaScriptSyntax.clickEvents.step3}</li>
          </ul>
        </div>

        <div>
          <h3>React</h3>
          <ul>
            <li>{reactSyntax.clickEvents.step1}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
