import { DocumentReference, Timestamp } from 'firebase-admin/firestore';
import { License as _License, Project as _Project } from './types';

export class License extends _License {
	project: DocumentReference<Project>;
	expiration?: Timestamp;

	constructor({
		owner,
		project,
		device,
		devices,
		expiration,
		tier,
	}: {
		owner: string;
		project: DocumentReference<Project>;
		device?: number;
		devices: number;
		expiration?: any;
		tier: number;
	}) {
		super({ device, devices, tier, owner });
		this.project = project;
		this.expiration = expiration;
	}

	static converter = {
		toFirestore: (token: License) => {
			return { ...token };
		},
		fromFirestore: (snapshot: any): License => {
			const data = snapshot.data();
			return new License({ ...data });
		},
	};
}

export class Project extends _Project {
	tokens: DocumentReference<License>[];

	constructor({
		name,
		version,
		tokens,
		tiers,
	}: {
		name: string;
		version?: string;
		tokens?: DocumentReference<License>[];
		tiers: number;
	}) {
		super({ name, version, tiers });
		this.tokens = tokens ?? [];
	}

	static converter = {
		toFirestore: (project: Project) => {
			return { ...project };
		},
		fromFirestore: (snapshot: any): Project => {
			const data = snapshot.data();
			return new Project({ ...data });
		},
	};
}
