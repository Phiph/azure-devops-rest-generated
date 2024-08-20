/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitRepositoryRef } from './GitRepositoryRef';
import type { ReferenceLinks } from './ReferenceLinks';
import type { TeamProjectReference } from './TeamProjectReference';
export type GitRepository = {
    _links?: ReferenceLinks;
    defaultBranch?: string;
    id?: string;
    /**
     * True if the repository is disabled. False otherwise.
     */
    isDisabled?: boolean;
    /**
     * True if the repository was created as a fork.
     */
    isFork?: boolean;
    /**
     * True if the repository is in maintenance. False otherwise.
     */
    isInMaintenance?: boolean;
    name?: string;
    parentRepository?: GitRepositoryRef;
    project?: TeamProjectReference;
    remoteUrl?: string;
    /**
     * Compressed size (bytes) of the repository.
     */
    size?: number;
    sshUrl?: string;
    url?: string;
    validRemoteUrls?: Array<string>;
    webUrl?: string;
};

