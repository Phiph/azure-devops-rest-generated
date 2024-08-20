/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitImportGitSource } from './GitImportGitSource';
import type { GitImportTfvcSource } from './GitImportTfvcSource';
/**
 * Parameters for creating an import request
 */
export type GitImportRequestParameters = {
    /**
     * Option to delete service endpoint when import is done
     */
    deleteServiceEndpointAfterImportIsDone?: boolean;
    /**
     * Source for importing git repository
     */
    gitSource?: GitImportGitSource;
    /**
     * Service Endpoint for connection to external endpoint
     */
    serviceEndpointId?: string;
    /**
     * Source for importing tfvc repository
     */
    tfvcSource?: GitImportTfvcSource;
};

