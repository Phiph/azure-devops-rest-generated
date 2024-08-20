/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitImportRequestParameters } from './GitImportRequestParameters';
import type { GitImportStatusDetail } from './GitImportStatusDetail';
import type { GitRepository } from './GitRepository';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * A request to import data from a remote source control system.
 */
export type GitImportRequest = {
    /**
     * Links to related resources.
     */
    _links?: ReferenceLinks;
    /**
     * Detailed status of the import, including the current step and an error message, if applicable.
     */
    detailedStatus?: GitImportStatusDetail;
    /**
     * The unique identifier for this import request.
     */
    importRequestId?: number;
    /**
     * Parameters for creating the import request.
     */
    parameters?: GitImportRequestParameters;
    /**
     * The target repository for this import.
     */
    repository?: GitRepository;
    /**
     * Current status of the import.
     */
    status?: 'queued' | 'inProgress' | 'completed' | 'failed' | 'abandoned';
    /**
     * A link back to this import request resource.
     */
    url?: string;
};

