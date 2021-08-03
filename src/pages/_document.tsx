import React from "react";

import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import { importFonts } from "config/externalImports";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>{importFonts}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
