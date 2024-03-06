import { DocumentReference, Timestamp } from 'firebase-admin/firestore';
import { User as _User, Token as _Token } from './types';

export class User extends _User {
	tokens: DocumentReference[];

	//override constructor
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
		super({ email, displayName, admin });
		this.tokens = tokens ?? [];
	}

	//override static converter
	static converter = {
		toFirestore: (user: User) => {
			return { ...user };
		},
		fromFirestore: (snapshot: any): User => {
			const data = snapshot.data();
			return new User({ ...data });
		},
	};
}

export class Token extends _Token {
	owner: DocumentReference<User>;
	project: DocumentReference<Project>;
	expiration?: Timestamp;

	//override constructor
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
		expiration?: any;
		tier: number;
	}) {
		super({ device, devices, tier });
		this.owner = owner;
		this.project = project;
		this.expiration = expiration;
	}

	//override static converter
	static converter = {
		toFirestore: (token: Token) => {
			return { ...token };
		},
		fromFirestore: (snapshot: any): Token => {
			const data = snapshot.data();
			return new Token({ ...data });
		},
	};
}

export class Project {
	name: string;
	version?: string;
	tokens: DocumentReference<Token>[];

	constructor({
		name,
		version,
		tokens,
	}: {
		name: string;
		version?: string;
		tokens?: DocumentReference<Token>[];
	}) {
		this.name = name;
		this.version = version;
		this.tokens = tokens ?? [];
	}

	static collectionName = 'projects';
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
