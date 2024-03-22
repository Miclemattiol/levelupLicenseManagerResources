import { DocumentReference, Timestamp } from 'firebase-admin/firestore';
import { User as _User, License as _License, Project as _Project } from './types';
export declare class User extends _User {
    tokens: DocumentReference<License>[];
    constructor({ email, displayName, admin, tokens, }: {
        email: string;
        displayName?: string;
        admin?: boolean;
        tokens?: DocumentReference<License>[];
    });
    static converter: {
        toFirestore: (user: User) => {
            tokens: DocumentReference<License>[];
            email: string;
            displayName?: string | undefined;
            admin: boolean;
        };
        fromFirestore: (snapshot: any) => User;
    };
}
export declare class License extends _License {
    owner: DocumentReference<User>;
    project: DocumentReference<Project>;
    expiration?: Timestamp;
    constructor({ owner, project, device, devices, expiration, tier, }: {
        owner: DocumentReference<User>;
        project: DocumentReference<Project>;
        device?: number;
        devices: number;
        expiration?: any;
        tier: number;
    });
    static converter: {
        toFirestore: (token: License) => {
            owner: DocumentReference<User>;
            project: DocumentReference<Project>;
            expiration?: Timestamp | undefined;
            device?: number | undefined;
            devices: number;
            tier: number;
        };
        fromFirestore: (snapshot: any) => License;
    };
}
export declare class Project extends _Project {
    tokens: DocumentReference<License>[];
    constructor({ name, version, tokens, tiers, }: {
        name: string;
        version?: string;
        tokens?: DocumentReference<License>[];
        tiers: number;
    });
    static converter: {
        toFirestore: (project: Project) => {
            tokens: DocumentReference<License>[];
            name: string;
            version?: string | undefined;
            tiers: number;
        };
        fromFirestore: (snapshot: any) => Project;
    };
}
