/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitStatus } from './GitStatus';
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
export type GitRef = {
    _links?: ReferenceLinks;
    creator?: IdentityRef;
    isLocked?: boolean;
    isLockedBy?: IdentityRef;
    name?: string;
    objectId?: string;
    peeledObjectId?: string;
    statuses?: Array<GitStatus>;
    url?: string;
};

