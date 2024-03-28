"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.License = void 0;
const types_1 = require("./types");
class License extends types_1.License {
    constructor({ owner, project, device, devices, expiration, tier, }) {
        super({ device, devices, tier, owner });
        this.project = project;
        this.expiration = expiration !== null && expiration !== void 0 ? expiration : null;
    }
}
exports.License = License;
License.converter = {
    toFirestore: (license) => {
        return Object.assign({}, license);
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new License(Object.assign({}, data));
    },
};
class Project extends types_1.Project {
    constructor({ name, version, licenses, tiers, }) {
        super({ name, version, tiers });
        this.licenses = licenses !== null && licenses !== void 0 ? licenses : [];
    }
}
exports.Project = Project;
Project.converter = {
    toFirestore: (project) => {
        return Object.assign({}, project);
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Project(Object.assign({}, data));
    },
};
