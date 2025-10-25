import { debugging } from '../data/debugging';

export default function Practice() {
  return (
    <>
      <h2>Practice</h2>
      {debugging.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.instruction}</p>
            {item.tip && (
              <ul>
                <li>{item.tip}</li>
              </ul>
            )}
          </div>
        );
      })}
    </>
  );
}
