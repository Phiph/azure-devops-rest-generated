/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchInfo } from './BranchInfo';
/**
 * Defines the TFVC repository status.
 */
export type TfvcRepositoryStatusResponse = {
    /**
     * Repository Id.
     */
    id?: string;
    /**
     * List of Indexing Information for TFVC repository
     */
    indexingInformation?: Array<BranchInfo>;
    /**
     * Repository Name.
     */
    name?: string;
};

