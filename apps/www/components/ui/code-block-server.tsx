import { CodeBlock } from "../code-block";

export default function CodeBlockServer({
  code,
  lang,
}: {
  lang?: "bash" | "ts" | "tsx" | "css" | "txt";
  code: string[];
}) {
  if (typeof code[0] !== "string") {
    return <div>Error: Invalid or empty code content</div>;
  }

  return <CodeBlock lang={lang ? lang : "tsx"} code={code[0]} />;
}
