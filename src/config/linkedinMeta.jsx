import { publicRuntimeConfig } from "helpers";

export const linkedinMeta = (
    <>
        <meta name="og:title" content="Teaching" />
        <meta name="og:description" content="A list of all classes I'm TAing or have TA'd for at UCLA." />
        <meta name="og:image" content={`${publicRuntimeConfig.staticFolder}/images/linkedin-preview.webp`} />
    </>
);
