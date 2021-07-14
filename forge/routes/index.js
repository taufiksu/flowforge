/**
 * All of the HTTP routes the forge server exposes.
 *
 * This includes three components:
 *
 *  - {@link forge.routes.session session} - routes related to session handling, login/out etc
 *  - {@link forge.routes.api api} - routes related to the forge api
 *  - {@link forge.routes.ui ui} - routes that serve the forge frontend web app
 *
 * @namespace routes
 * @memberof forge
 */
module.exports = async function(app) {
    await app.register(require("./session"), {prefix: '/account'})
    await app.register(require("./api"), {prefix: '/api/v1'})
    await app.register(require("./ui"))
}