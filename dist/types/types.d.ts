export declare abstract class License {
    device: number | null;
    devices: number;
    owner: string;
    abstract expiration: unknown | null;
    abstract project: unknown;
    tier: number;
    constructor({ device, devices, owner, tier, }: {
        device?: number;
        devices: number;
        owner: string;
        tier: number;
    });
    static collectionName: string;
}
export declare abstract class Project {
    name: string;
    version: string | null;
    abstract licenses: unknown[];
    tiers: string[];
    constructor({ name, version, tiers, }: {
        name: string;
        version?: string;
        tiers: string[];
    });
    static collectionName: string;
}
