/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitRepositoryRef } from './GitRepositoryRef';
import type { TeamProjectReference } from './TeamProjectReference';
export type GitRepositoryCreateOptions = {
    name?: string;
    parentRepository?: GitRepositoryRef;
    project?: TeamProjectReference;
};

