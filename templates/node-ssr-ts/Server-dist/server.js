"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_js_1 = require("./Controller/api.js");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const app_js_1 = require("./View/winnetou-ssr/dist/app.js");
app.use(express_1.default.static("Public"));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    let template = new app_js_1.$html().constructoString();
    res.send(template);
});
(0, api_js_1.api)(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map