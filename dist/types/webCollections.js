"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.License = void 0;
const types_1 = require("./types");
class License extends types_1.License {
    constructor({ owner, project, device, devices, expiration, tier, }) {
        super({ device, devices, tier, owner });
        this.project = project;
        this.expiration = expiration;
    }
}
exports.License = License;
License.converter = {
    toFirestore: (license) => {
        return Object.assign({}, Object.entries(license).filter(([, value]) => value !== undefined));
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
        console.log(project);
        const ret = project.version ? Object.assign({}, project) : {
            name: project.name,
            tiers: project.tiers,
            licenses: project.licenses
        };
        return ret;
        return Object.assign({}, Object.entries(project).filter(([, value]) => value !== undefined));
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Project(Object.assign({}, data));
    },
};
