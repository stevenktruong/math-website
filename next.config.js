const basePath = process.env.URL_ENV === "production" ? "/~steven" : "";

module.exports = {
    basePath: basePath,
    exportTrailingSlash: true,
    publicRuntimeConfig: {
        staticFolder: basePath,
    },
};
