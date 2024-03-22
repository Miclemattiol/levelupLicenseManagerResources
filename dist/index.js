"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebToken = exports.WebProject = exports.AdminToken = exports.AdminProject = void 0;
var adminCollections_1 = require("./types/adminCollections");
Object.defineProperty(exports, "AdminProject", { enumerable: true, get: function () { return adminCollections_1.Project; } });
Object.defineProperty(exports, "AdminToken", { enumerable: true, get: function () { return adminCollections_1.License; } });
var webCollections_1 = require("./types/webCollections");
Object.defineProperty(exports, "WebProject", { enumerable: true, get: function () { return webCollections_1.Project; } });
Object.defineProperty(exports, "WebToken", { enumerable: true, get: function () { return webCollections_1.License; } });
