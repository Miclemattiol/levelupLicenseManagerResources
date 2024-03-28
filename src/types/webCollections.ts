import { DocumentReference, Timestamp } from 'firebase/firestore';
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
		toFirestore: (license: License) => {
			return {
				...Object.entries(license).filter(
					([, value]) => value !== undefined,
				),
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
		licenses,
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
			console.log(project);
			const ret = project.version? {
				...project
			}: {
				name: project.name,
				tiers: project.tiers,
				licenses: project.licenses
			}
			return { ...Object.entries(project).filter(([, value]) => value !== undefined)};
		},
		fromFirestore: (snapshot: any): Project => {
			const data = snapshot.data();
			return new Project({ ...data });
		},
	};
}
