import { javaScriptSyntax } from '../data/javaScript/javaScriptSyntax';
import { reactSyntax } from '../data/react/reactSyntax';

export default function Compare() {
  return (
    <>
      <h2>Compare</h2>

      <h3>Click events in JavaScript vs. React</h3>

      <div className="columns">
        <div>
          <h3>JavaScript</h3>
          <p>html</p>
          <p>{javaScriptSyntax.clickEvents.step1}</p>
          <p>js</p>
          <p>{javaScriptSyntax.clickEvents.step2}</p>
          <p>{javaScriptSyntax.clickEvents.step3}</p>
        </div>

        <div>
          <h3>React</h3>
          <p>jsx</p>
          <p>{reactSyntax.clickEvents.step1}</p>
        </div>
      </div>
    </>
  );
}
