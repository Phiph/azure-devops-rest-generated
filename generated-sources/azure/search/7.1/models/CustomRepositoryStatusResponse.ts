/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepotInfo } from './DepotInfo';
/**
 * Defines the custom repository status.
 */
export type CustomRepositoryStatusResponse = {
    /**
     * Repository Id.
     */
    id?: string;
    /**
     * List of indexed top level folders info.
     */
    indexedTopLevelFolders?: Array<DepotInfo>;
    /**
     * Repository Name.
     */
    name?: string;
};

