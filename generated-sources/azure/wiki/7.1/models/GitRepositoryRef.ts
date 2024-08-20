/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectCollectionReference } from './TeamProjectCollectionReference';
import type { TeamProjectReference } from './TeamProjectReference';
export type GitRepositoryRef = {
    /**
     * Team Project Collection where this Fork resides
     */
    collection?: TeamProjectCollectionReference;
    id?: string;
    /**
     * True if the repository was created as a fork
     */
    isFork?: boolean;
    name?: string;
    project?: TeamProjectReference;
    remoteUrl?: string;
    sshUrl?: string;
    url?: string;
};

