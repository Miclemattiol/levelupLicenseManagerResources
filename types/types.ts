import {
	DocumentReference as WebDocumentReference,
	FirestoreDataConverter as WebFirestoreDataConverter,
	QueryDocumentSnapshot as WebQueryDocumentSnapshot,
	Timestamp as WebTimestamp,
} from 'firebase/firestore';

import {
	DocumentReference as AdminDocumentReference,
	FirestoreDataConverter as AdminFirestoreDataConverter,
	QueryDocumentSnapshot as AdminQueryDocumentSnapshot,
	Timestamp as AdminTimestamp,
} from 'firebase-admin/firestore';

// type DocumentReference<T> = WebDocumentReference<T> | AdminDocumentReference<T>;
// type FirestoreDataConverter<T> =
// 	| WebFirestoreDataConverter<T>
// 	| AdminFirestoreDataConverter<T>;
// type QueryDocumentSnapshot =
// 	| WebQueryDocumentSnapshot
// 	| AdminQueryDocumentSnapshot;
// type Timestamp = WebTimestamp | AdminTimestamp;

export abstract class User {
	email: string;
	displayName?: string;
	abstract tokens: unknown[];
	admin: boolean = false;

	constructor({
		email,
		displayName,
		admin,
	}: {
		email: string;
		displayName?: string;
		admin?: boolean;
	}) {
		this.email = email;
		this.displayName = displayName;
		this.admin = admin ?? false;
	}

	static collectionName = 'users';
}

export abstract class Token {
	device?: number;
	devices: number;
	abstract expiration?: unknown;
	abstract owner: unknown;
	abstract project: unknown;
	tier: number;

	constructor({
		device,
		devices,
		tier,
	}: {
		device?: number;
		devices: number;
		tier: number;
	}) {
		this.device = device;
		this.devices = devices;
		this.tier = tier;
	}

	static collectionName = 'tokens';
}

export abstract class Project {
	name: string;
	version?: string;
	abstract tokens: unknown[];
	tiers: number;

	constructor({
		name,
		version,
		tiers,
	}: {
		name: string;
		version?: string;
		tiers: number;
	}) {
		this.name = name;
		this.version = version;
		this.tiers = tiers;
	}

	static collectionName = 'projects';
}
