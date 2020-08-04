const basePath = process.env.NODE_ENV === "production" ? "/~steven" : "";

module.exports = {
    basePath: basePath,
    exportTrailingSlash: true,
    publicRuntimeConfig: {
        staticFolder: basePath,
    },
};
