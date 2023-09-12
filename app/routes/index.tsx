import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New React App" },
    { name: "description", content: "Learn the fundamentals of react!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ol>
        <li>
          <Link to="/examples/component-simple">Component Simple</Link>
        </li>
        <li>
          <Link to="/examples/component-with-props">Component with Props</Link>
        </li>
        <li>
          <Link to="/examples/component-composing-reusing">Composing & Reusing components</Link>
        </li>

        <li>
          <Link to="/examples/react-state"> React useState example</Link>
        </li>

        <li>
          <Link to="/examples/life-cycle-method-useEffect">Lifeycyle Method: useEffect</Link>
        </li>

        <li>
          <Link to="/examples/react-hooks-useSearchParams">React Hook: useSearchParams</Link>
        </li>
      </ol>
    </div>
  );
}
