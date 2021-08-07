import { Options } from "hast-util-raw";
import { Plugin } from "unified";
import unified from "unified";

import remark from "remark";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import highlight from "remark-highlight.js";
import math from "remark-math";
import remark2rehype from "remark-rehype";
import slug from "remark-slug";
import toc from "remark-toc";

import katex from "rehype-katex";
import raw from "rehype-raw";
import stringify from "rehype-stringify";

/**
 * Returns a processor that does the bare-bones Markdown -> HTML conversion
 */
export const baseProcessor = (): unified.Processor<remark.RemarkOptions> =>
    remark().use(remark2rehype, { allowDangerousHtml: true }).use(raw).use(stringify);

/**
 * Returns a processor with class-specific math macros included in the Markdown -> HTML conversion
 * @param mathMacros is the JSON containing all the macros
 */
export const processorWithMathWithMacros = (mathMacros: JSON): unified.Processor<remark.RemarkOptions> =>
    remark()
        .use(toc, { maxDepth: 3 })
        .use(slug)
        .use(math)
        .use(highlight as Plugin<[Options?]>)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(katex, {
            trust: true,
            strict: false,
            macros: mathMacros,
        })
        .use(raw)
        .use(stringify);
