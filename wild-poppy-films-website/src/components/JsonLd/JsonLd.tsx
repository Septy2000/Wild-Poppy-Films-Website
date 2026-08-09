/**
 * Emits a schema.org JSON-LD block. Search engines read this to understand what
 * the page is about; it is invisible to visitors and adds no layout.
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> }) {
    // JSON-LD has to go in as raw text - there is no React-safe equivalent. The one
    // way a JSON string can escape a <script> block is by containing "</script>", so
    // every "<" is escaped to its < form. JSON.stringify output is otherwise
    // already free of unescaped quotes and newlines.
    const json = JSON.stringify(schema).replace(/</g, "\\u003c");

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
