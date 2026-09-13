import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// ESLint 9 flat config. eslint-config-next 16 ships flat config natively, so it
// spreads in directly — no FlatCompat shim needed.
export default [
    ...nextCoreWebVitals,
    {
        ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
    },
];
