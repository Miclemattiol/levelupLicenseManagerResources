export declare abstract class License {
    device?: number;
    devices: number;
    owner: string;
    abstract expiration?: unknown;
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
    version?: string;
    abstract licenses: unknown[];
    tiers: number;
    constructor({ name, version, tiers, }: {
        name: string;
        version?: string;
        tiers: number;
    });
    static collectionName: string;
}
