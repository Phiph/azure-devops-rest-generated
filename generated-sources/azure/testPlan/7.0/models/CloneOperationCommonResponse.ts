/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneStatistics } from './CloneStatistics';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Common Response for clone operation
 */
export type CloneOperationCommonResponse = {
    /**
     * Various statistics related to the clone operation
     */
    cloneStatistics?: CloneStatistics;
    /**
     * Completion data of the operation
     */
    completionDate?: string;
    /**
     * Creation data of the operation
     */
    creationDate?: string;
    /**
     * Reference links
     */
    links?: ReferenceLinks;
    /**
     * Message related to the job
     */
    message?: string;
    /**
     * Clone operation Id
     */
    opId?: number;
    /**
     * Clone operation state
     */
    state?: 'failed' | 'inProgress' | 'queued' | 'succeeded';
};

