/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitConflict } from './GitConflict';
export type GitConflictUpdateResult = {
    /**
     * Conflict ID that was provided by input
     */
    conflictId?: number;
    /**
     * Reason for failing
     */
    customMessage?: string;
    /**
     * New state of the conflict after updating
     */
    updatedConflict?: GitConflict;
    /**
     * Status of the update on the server
     */
    updateStatus?: 'succeeded' | 'badRequest' | 'invalidResolution' | 'unsupportedConflictType' | 'notFound';
};

