"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.Token = exports.User = void 0;
class User {
    constructor({ email, displayName, admin, tokens, }) {
        this.admin = false;
        this.email = email;
        this.displayName = displayName;
        this.tokens = tokens !== null && tokens !== void 0 ? tokens : [];
        this.admin = admin !== null && admin !== void 0 ? admin : false;
    }
}
exports.User = User;
User.collectionName = 'users';
User.converter = {
    toFirestore: (user) => {
        return Object.assign({}, user);
    },
    fromFirestore: (snapshot) => {
        var _a;
        const data = snapshot.data();
        return new User({
            email: data.email,
            displayName: data.displayName,
            tokens: (_a = data.tokens) !== null && _a !== void 0 ? _a : [],
            admin: data.admin,
        });
    },
};
class Token {
    constructor({ owner, project, device, devices, expiration, tier, }) {
        this.owner = owner;
        this.project = project;
        this.device = device;
        this.devices = devices;
        this.expiration = expiration;
        this.tier = tier;
    }
}
exports.Token = Token;
Token.collectionName = 'tokens';
Token.converter = {
    toFirestore: (token) => {
        return Object.assign({}, token);
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        console.log(data);
        return new Token({
            device: data.device,
            devices: data.devices,
            expiration: data.expiration,
            owner: data.owner,
            project: data.project,
            tier: data.tier,
        });
    },
};
class Project {
    constructor({ name, version, tokens, tiers, }) {
        this.name = name;
        this.version = version;
        this.tokens = tokens !== null && tokens !== void 0 ? tokens : [];
        this.tiers = tiers;
    }
}
exports.Project = Project;
Project.collectionName = 'projects';
Project.converter = {
    toFirestore: (project) => {
        return Object.assign({}, project);
    },
    fromFirestore: (snapshot) => {
        var _a;
        const data = snapshot.data();
        return new Project({
            name: data.name,
            version: data.version,
            tokens: (_a = data.tokens) !== null && _a !== void 0 ? _a : [],
            tiers: data.tiers,
        });
    },
};
