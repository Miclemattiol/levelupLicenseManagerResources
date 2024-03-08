import { DocumentReference, Timestamp } from 'firebase-admin/firestore';
import { User as _User, Token as _Token, Project as _Project } from './types';
export declare class User extends _User {
    tokens: DocumentReference<Token>[];
    constructor({ email, displayName, admin, tokens, }: {
        email: string;
        displayName?: string;
        admin?: boolean;
        tokens?: DocumentReference<Token>[];
    });
    static converter: {
        toFirestore: (user: User) => {
            tokens: DocumentReference<Token>[];
            email: string;
            displayName?: string | undefined;
            admin: boolean;
        };
        fromFirestore: (snapshot: any) => User;
    };
}
export declare class Token extends _Token {
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
        toFirestore: (token: Token) => {
            owner: DocumentReference<User>;
            project: DocumentReference<Project>;
            expiration?: Timestamp | undefined;
            device?: number | undefined;
            devices: number;
            tier: number;
        };
        fromFirestore: (snapshot: any) => Token;
    };
}
export declare class Project extends _Project {
    tokens: DocumentReference<Token>[];
    constructor({ name, version, tokens, tiers, }: {
        name: string;
        version?: string;
        tokens?: DocumentReference<Token>[];
        tiers: number;
    });
    static converter: {
        toFirestore: (project: Project) => {
            tokens: DocumentReference<Token>[];
            name: string;
            version?: string | undefined;
            tiers: number;
        };
        fromFirestore: (snapshot: any) => Project;
    };
}
