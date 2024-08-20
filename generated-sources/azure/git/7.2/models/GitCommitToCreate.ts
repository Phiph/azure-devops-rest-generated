/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPathAction } from './GitPathAction';
import type { GitRef } from './GitRef';
export type GitCommitToCreate = {
    baseRef?: GitRef;
    comment?: string;
    pathActions?: Array<GitPathAction>;
};

