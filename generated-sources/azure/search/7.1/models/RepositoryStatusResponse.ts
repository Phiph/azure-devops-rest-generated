/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchInfo } from './BranchInfo';
/**
 * Defines the repository status.
 */
export type RepositoryStatusResponse = {
    /**
     * Repository Id.
     */
    id?: string;
    /**
     * List of Indexed branches info.
     */
    indexedBranches?: Array<BranchInfo>;
    /**
     * Repository Name.
     */
    name?: string;
};

