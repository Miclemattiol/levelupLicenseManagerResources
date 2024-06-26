import { DocumentReference, Timestamp } from 'firebase-admin/firestore';
import { License as _License, Project as _Project } from './types';
export declare class License extends _License {
    project: DocumentReference<Project>;
    expiration: Timestamp | null;
    constructor({ owner, project, device, devices, expiration, tier, }: {
        owner: string;
        project: DocumentReference<Project>;
        device?: number;
        devices: number;
        expiration?: Timestamp;
        tier: number;
    });
    static converter: {
        toFirestore: (license: License) => {
            project: DocumentReference<Project>;
            expiration: Timestamp | null;
            device: number | null;
            devices: number;
            owner: string;
            tier: number;
        };
        fromFirestore: (snapshot: any) => License;
    };
}
export declare class Project extends _Project {
    licenses: DocumentReference<License>[];
    constructor({ name, version, licenses: licenses, tiers, }: {
        name: string;
        version?: string;
        licenses?: DocumentReference<License>[];
        tiers: string[];
    });
    static converter: {
        toFirestore: (project: Project) => {
            licenses: DocumentReference<License>[];
            name: string;
            version: string | null;
            tiers: string[];
        };
        fromFirestore: (snapshot: any) => Project;
    };
}
