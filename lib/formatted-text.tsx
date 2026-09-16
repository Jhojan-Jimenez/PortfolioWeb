import React from "react";

interface FormattedTextProps {
  text?: string;
  className?: string;
}

/**
 * Renders text with high-contrast highlighted keywords for fast executive and technical scanning:
 * - **bold terms** render in crisp high-contrast white (<strong className="text-white font-semibold">)
 * - `code snippets` render as subtle purple mono pills (<code className="...">)
 */
export function FormattedText({ text, className = "" }: FormattedTextProps) {
  if (!text) return null;

  // Split by markdown bold (**...**) and inline code (`...`)
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const content = part.slice(2, -2);
          return (
            <strong
              key={index}
              className="text-white font-semibold tracking-normal"
            >
              {content}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          const content = part.slice(1, -1);
          return (
            <code
              key={index}
              className="font-mono text-[0.86em] text-purple-300 bg-purple-950/40 border border-purple-500/25 px-1.5 py-0.5 rounded mx-0.5 inline-block align-baseline"
            >
              {content}
            </code>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}
