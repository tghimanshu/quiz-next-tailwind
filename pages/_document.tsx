import { Html, Head, Main, NextScript } from "next/document";

/**
 * A custom Document component to augment the application's HTML and body tags.
 * This is used to set the language attribute and apply global body classes.
 *
 * @returns {JSX.Element} The custom Document structure including Html, Head, Main, and NextScript.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
