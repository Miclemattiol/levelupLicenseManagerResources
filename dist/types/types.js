"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.License = void 0;
class License {
    constructor({ device, devices, owner, tier, }) {
        this.device = device !== null && device !== void 0 ? device : null;
        this.devices = devices;
        this.owner = owner;
        this.tier = tier;
    }
}
exports.License = License;
License.collectionName = 'tokens';
class Project {
    constructor({ name, version, tiers, }) {
        this.name = name;
        this.version = version !== null && version !== void 0 ? version : null;
        this.tiers = tiers;
    }
}
exports.Project = Project;
Project.collectionName = 'projects';
