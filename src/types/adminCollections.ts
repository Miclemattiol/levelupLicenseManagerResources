import { DocumentReference, Timestamp } from 'firebase-admin/firestore';
import { License as _License, Project as _Project } from './types';

export class License extends _License {
	project: DocumentReference<Project>;
	expiration: Timestamp | null;

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
		expiration?: Timestamp;
		tier: number;
	}) {
		super({ device, devices, tier, owner });
		this.project = project;
		this.expiration = expiration ?? null;
	}

	static converter = {
		toFirestore: (license: License) => {
			return {
				...license
			};
		},
		fromFirestore: (snapshot: any): License => {
			const data = snapshot.data();
			return new License({ ...data });
		},
	};
}

export class Project extends _Project {
	licenses: DocumentReference<License>[];

	constructor({
		name,
		version,
		licenses: licenses,
		tiers,
	}: {
		name: string;
		version?: string;
		licenses?: DocumentReference<License>[];
		tiers: string[];
	}) {
		super({ name, version, tiers });
		this.licenses = licenses ?? [];
	}

	static converter = {
		toFirestore: (project: Project) => {
			return {
				...Object.entries(project).filter(
					([, value]) => value !== undefined,
				),
			};
		},
		fromFirestore: (snapshot: any): Project => {
			const data = snapshot.data();
			return new Project({ ...data });
		},
	};
}
