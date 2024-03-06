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

type DocumentReference<T> = WebDocumentReference<T> | AdminDocumentReference<T>;
type FirestoreDataConverter<T> =
	| WebFirestoreDataConverter<T>
	| AdminFirestoreDataConverter<T>;
type QueryDocumentSnapshot =
	| WebQueryDocumentSnapshot
	| AdminQueryDocumentSnapshot;
type Timestamp = WebTimestamp | AdminTimestamp;

export class User {
	email: string;
	displayName?: string;
	tokens: DocumentReference<Token>[];
	admin: boolean = false;

	constructor({
		email,
		displayName,
		admin,
		tokens,
	}: {
		email: string;
		displayName?: string;
		admin?: boolean;
		tokens?: DocumentReference<Token>[];
	}) {
		this.email = email;
		this.displayName = displayName;
		this.tokens = tokens ?? [];
		this.admin = admin ?? false;
	}

	static collectionName = 'users';
	static converter: FirestoreDataConverter<User> = {
		toFirestore: (user: User) => {
			return { ...user };
		},
		fromFirestore: (snapshot: QueryDocumentSnapshot): User => {
			const data = snapshot.data();
			return new User({
				email: data.email,
				displayName: data.displayName,
				tokens: data.tokens ?? [],
				admin: data.admin,
			});
		},
	};
}

export class Token {
	device?: number;
	devices: number;
	expiration?: Timestamp;
	owner: DocumentReference<User>;
	project: DocumentReference<Project>;
	tier: number;

	constructor({
		owner,
		project,
		device,
		devices,
		expiration,
		tier,
	}: {
		owner: DocumentReference<User>;
		project: DocumentReference<Project>;
		device?: number;
		devices: number;
		expiration?: Timestamp;
		tier: number;
	}) {
		this.owner = owner;
		this.project = project;
		this.device = device;
		this.devices = devices;
		this.expiration = expiration;
		this.tier = tier;
	}

	static collectionName = 'tokens';
	static converter: FirestoreDataConverter<Token> = {
		toFirestore: (token: Token) => {
			return { ...token };
		},
		fromFirestore: (snapshot: QueryDocumentSnapshot): Token => {
			const data = snapshot.data();
			console.log(data);
			return new Token({
				device: data.device,
				devices: data.devices,
				expiration: data.expiration,
				owner: data.owner,
				project: data.project,
				tier: data.tier,
			});
		},
	};
}

export class Project {
	name: string;
	version?: string;
	tokens: DocumentReference<Token>[];
	tiers: number;

	constructor({
		name,
		version,
		tokens,
		tiers,
	}: {
		name: string;
		version?: string;
		tokens?: DocumentReference<Token>[];
		tiers: number;
	}) {
		this.name = name;
		this.version = version;
		this.tokens = tokens ?? [];
		this.tiers = tiers;
	}

	static collectionName = 'projects';
	static converter: FirestoreDataConverter<Project> = {
		toFirestore: (project: Project) => {
			return { ...project };
		},
		fromFirestore: (snapshot: QueryDocumentSnapshot): Project => {
			const data = snapshot.data();
			return new Project({
				name: data.name,
				version: data.version,
				tokens: data.tokens ?? [],
				tiers: data.tiers,
			});
		},
	};
}
