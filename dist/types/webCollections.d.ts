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
        toFirestore: (license: License) => {
            [x: number]: [string, any];
            length: number;
            toString(): string;
            toLocaleString(): string;
            pop(): [string, any] | undefined;
            push(...items: [string, any][]): number;
            concat(...items: ConcatArray<[string, any]>[]): [string, any][];
            concat(...items: ([string, any] | ConcatArray<[string, any]>)[]): [string, any][];
            join(separator?: string | undefined): string;
            reverse(): [string, any][];
            shift(): [string, any] | undefined;
            slice(start?: number | undefined, end?: number | undefined): [string, any][];
            sort(compareFn?: ((a: [string, any], b: [string, any]) => number) | undefined): [string, any][];
            splice(start: number, deleteCount?: number | undefined): [string, any][];
            splice(start: number, deleteCount: number, ...items: [string, any][]): [string, any][];
            unshift(...items: [string, any][]): number;
            indexOf(searchElement: [string, any], fromIndex?: number | undefined): number;
            lastIndexOf(searchElement: [string, any], fromIndex?: number | undefined): number;
            every<S extends [string, any]>(predicate: (value: [string, any], index: number, array: [string, any][]) => value is S, thisArg?: any): this is S[];
            every(predicate: (value: [string, any], index: number, array: [string, any][]) => unknown, thisArg?: any): boolean;
            some(predicate: (value: [string, any], index: number, array: [string, any][]) => unknown, thisArg?: any): boolean;
            forEach(callbackfn: (value: [string, any], index: number, array: [string, any][]) => void, thisArg?: any): void;
            map<U>(callbackfn: (value: [string, any], index: number, array: [string, any][]) => U, thisArg?: any): U[];
            filter<S_1 extends [string, any]>(predicate: (value: [string, any], index: number, array: [string, any][]) => value is S_1, thisArg?: any): S_1[];
            filter(predicate: (value: [string, any], index: number, array: [string, any][]) => unknown, thisArg?: any): [string, any][];
            reduce(callbackfn: (previousValue: [string, any], currentValue: [string, any], currentIndex: number, array: [string, any][]) => [string, any]): [string, any];
            reduce(callbackfn: (previousValue: [string, any], currentValue: [string, any], currentIndex: number, array: [string, any][]) => [string, any], initialValue: [string, any]): [string, any];
            reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: [string, any], currentIndex: number, array: [string, any][]) => U_1, initialValue: U_1): U_1;
            reduceRight(callbackfn: (previousValue: [string, any], currentValue: [string, any], currentIndex: number, array: [string, any][]) => [string, any]): [string, any];
            reduceRight(callbackfn: (previousValue: [string, any], currentValue: [string, any], currentIndex: number, array: [string, any][]) => [string, any], initialValue: [string, any]): [string, any];
            reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: [string, any], currentIndex: number, array: [string, any][]) => U_2, initialValue: U_2): U_2;
            find<S_2 extends [string, any]>(predicate: (value: [string, any], index: number, obj: [string, any][]) => value is S_2, thisArg?: any): S_2 | undefined;
            find(predicate: (value: [string, any], index: number, obj: [string, any][]) => unknown, thisArg?: any): [string, any] | undefined;
            findIndex(predicate: (value: [string, any], index: number, obj: [string, any][]) => unknown, thisArg?: any): number;
            fill(value: [string, any], start?: number | undefined, end?: number | undefined): [string, any][];
            copyWithin(target: number, start: number, end?: number | undefined): [string, any][];
            entries(): IterableIterator<[number, [string, any]]>;
            keys(): IterableIterator<number>;
            values(): IterableIterator<[string, any]>;
            includes(searchElement: [string, any], fromIndex?: number | undefined): boolean;
            flatMap<U_3, This = undefined>(callback: (this: This, value: [string, any], index: number, array: [string, any][]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
            flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
            [Symbol.iterator](): IterableIterator<[string, any]>;
            [Symbol.unscopables]: {
                [x: number]: boolean | undefined;
                length?: boolean | undefined;
                toString?: boolean | undefined;
                toLocaleString?: boolean | undefined;
                pop?: boolean | undefined;
                push?: boolean | undefined;
                concat?: boolean | undefined;
                join?: boolean | undefined;
                reverse?: boolean | undefined;
                shift?: boolean | undefined;
                slice?: boolean | undefined;
                sort?: boolean | undefined;
                splice?: boolean | undefined;
                unshift?: boolean | undefined;
                indexOf?: boolean | undefined;
                lastIndexOf?: boolean | undefined;
                every?: boolean | undefined;
                some?: boolean | undefined;
                forEach?: boolean | undefined;
                map?: boolean | undefined;
                filter?: boolean | undefined;
                reduce?: boolean | undefined;
                reduceRight?: boolean | undefined;
                find?: boolean | undefined;
                findIndex?: boolean | undefined;
                fill?: boolean | undefined;
                copyWithin?: boolean | undefined;
                entries?: boolean | undefined;
                keys?: boolean | undefined;
                values?: boolean | undefined;
                includes?: boolean | undefined;
                flatMap?: boolean | undefined;
                flat?: boolean | undefined;
                [Symbol.iterator]?: boolean | undefined;
                readonly [Symbol.unscopables]?: boolean | undefined;
                at?: boolean | undefined;
            };
            at(index: number): [string, any] | undefined;
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
            version: string | null;
            tiers: string[];
        };
        fromFirestore: (snapshot: any) => Project;
    };
}
