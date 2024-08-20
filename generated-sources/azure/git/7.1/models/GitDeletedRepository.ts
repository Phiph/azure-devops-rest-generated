/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { TeamProjectReference } from './TeamProjectReference';
export type GitDeletedRepository = {
    createdDate?: string;
    deletedBy?: IdentityRef;
    deletedDate?: string;
    id?: string;
    name?: string;
    project?: TeamProjectReference;
};

