"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.License = exports.User = void 0;
const types_1 = require("./types");
class User extends types_1.User {
    constructor({ email, displayName, admin, tokens, }) {
        super({ email, displayName, admin });
        this.tokens = tokens !== null && tokens !== void 0 ? tokens : [];
    }
}
exports.User = User;
User.converter = {
    toFirestore: (user) => {
        return Object.assign({}, user);
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new User(Object.assign({}, data));
    },
};
class License extends types_1.License {
    constructor({ owner, project, device, devices, expiration, tier, }) {
        super({ device, devices, tier });
        this.owner = owner;
        this.project = project;
        this.expiration = expiration;
    }
}
exports.License = License;
License.converter = {
    toFirestore: (token) => {
        return Object.assign({}, token);
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new License(Object.assign({}, data));
    },
};
class Project extends types_1.Project {
    constructor({ name, version, tokens, tiers, }) {
        super({ name, version, tiers });
        this.tokens = tokens !== null && tokens !== void 0 ? tokens : [];
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
