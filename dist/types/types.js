"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.License = exports.User = void 0;
class User {
    constructor({ email, displayName, admin, }) {
        this.admin = false;
        this.email = email;
        this.displayName = displayName;
        this.admin = admin !== null && admin !== void 0 ? admin : false;
    }
}
exports.User = User;
User.collectionName = 'users';
class License {
    constructor({ device, devices, tier, }) {
        this.device = device;
        this.devices = devices;
        this.tier = tier;
    }
}
exports.License = License;
License.collectionName = 'tokens';
class Project {
    constructor({ name, version, tiers, }) {
        this.name = name;
        this.version = version;
        this.tiers = tiers;
    }
}
exports.Project = Project;
Project.collectionName = 'projects';
