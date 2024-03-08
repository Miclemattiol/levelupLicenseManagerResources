"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.Token = exports.User = void 0;
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
        return { ...user };
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new User({ ...data });
    },
};
class Token extends types_1.Token {
    constructor({ owner, project, device, devices, expiration, tier, }) {
        super({ device, devices, tier });
        this.owner = owner;
        this.project = project;
        this.expiration = expiration;
    }
}
exports.Token = Token;
Token.converter = {
    toFirestore: (token) => {
        return { ...token };
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Token({ ...data });
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
        return { ...project };
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Project({ ...data });
    },
};
