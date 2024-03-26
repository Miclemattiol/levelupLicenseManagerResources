import { DocumentReference, Timestamp } from 'firebase/firestore';
import { License as _License, Project as _Project } from './types';
export declare class License extends _License {
    project: DocumentReference<Project>;
    expiration?: Timestamp;
    constructor({ owner, project, device, devices, expiration, tier, }: {
        owner: string;
        project: DocumentReference<Project>;
        device?: number;
        devices: number;
        expiration?: any;
        tier: number;
    });
    static converter: {
        toFirestore: (token: License) => {
            project: DocumentReference<Project>;
            expiration?: Timestamp | undefined;
            device?: number | undefined;
            devices: number;
            owner: string;
            tier: number;
        };
        fromFirestore: (snapshot: any) => License;
    };
}
export declare class Project extends _Project {
    licenses: DocumentReference<License>[];
    constructor({ name, version, licenses, tiers, }: {
        name: string;
        version?: string;
        licenses?: DocumentReference<License>[];
        tiers: string[];
    });
    static converter: {
        toFirestore: (project: Project) => {
            licenses: DocumentReference<License>[];
            name: string;
            version?: string | undefined;
            tiers: string[];
        };
        fromFirestore: (snapshot: any) => Project;
    };
}
