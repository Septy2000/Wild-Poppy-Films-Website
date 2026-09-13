/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    turbopack: {
        // Turbopack is the default bundler as of Next 16. Every *.svg in the repo
        // lives under src/icons and is imported as a React component, so a single
        // blanket rule covers them; there are no "*.svg?url" imports to preserve.
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;
