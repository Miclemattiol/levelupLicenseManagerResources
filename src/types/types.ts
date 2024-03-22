export abstract class License {
	device?: number;
	devices: number;
	owner: string;
	abstract expiration?: unknown;
	abstract project: unknown;
	tier: number;

	constructor({
		device,
		devices,
		owner,
		tier,
	}: {
		device?: number;
		devices: number;
		owner: string;
		tier: number;
	}) {
		this.device = device;
		this.devices = devices;
		this.owner = owner;
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
