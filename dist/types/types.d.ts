export declare abstract class User {
    email: string;
    displayName?: string;
    abstract tokens: unknown[];
    admin: boolean;
    constructor({ email, displayName, admin, }: {
        email: string;
        displayName?: string;
        admin?: boolean;
    });
    static collectionName: string;
}
export declare abstract class License {
    device?: number;
    devices: number;
    abstract expiration?: unknown;
    abstract owner: unknown;
    abstract project: unknown;
    tier: number;
    constructor({ device, devices, tier, }: {
        device?: number;
        devices: number;
        tier: number;
    });
    static collectionName: string;
}
export declare abstract class Project {
    name: string;
    version?: string;
    abstract tokens: unknown[];
    tiers: number;
    constructor({ name, version, tiers, }: {
        name: string;
        version?: string;
        tiers: number;
    });
    static collectionName: string;
}
