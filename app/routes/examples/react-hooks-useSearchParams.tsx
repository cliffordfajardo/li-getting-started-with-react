import { Link, useSearchParams as useReactRouterSearchParams } from "@remix-run/react";


export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>Example: React hook useSearchParams</h1>
            <p>
                <Link to="/">Go to home / page</Link>
            </p>
        </div>
    );
}
