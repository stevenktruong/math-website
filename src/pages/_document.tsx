import React from "react";

import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

import { importFonts } from "config/externalImports";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>{importFonts}</Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* Empty script tag as chrome bug fix, see https://stackoverflow.com/a/42969608/943337 */}
                    <script> </script>
                </body>
            </Html>
        );
    }
}
