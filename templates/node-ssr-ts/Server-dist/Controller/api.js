"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const api_model_1 = require("../Model/api.model");
const api = (app) => {
    app.get("/api/health", (req, res) => {
        return res.json((0, api_model_1.healthCheck)());
    });
};
exports.api = api;
//# sourceMappingURL=api.js.map