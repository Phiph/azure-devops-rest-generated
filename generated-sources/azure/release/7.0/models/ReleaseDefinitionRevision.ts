/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
export type ReleaseDefinitionRevision = {
    /**
     * Gets api-version for revision object.
     */
    apiVersion?: string;
    /**
     * Gets the identity who did change.
     */
    changedBy?: IdentityRef;
    /**
     * Gets date on which ReleaseDefinition changed.
     */
    changedDate?: string;
    /**
     * Gets type of change.
     */
    changeType?: 'add' | 'update' | 'delete' | 'undelete';
    /**
     * Gets comments for revision.
     */
    comment?: string;
    /**
     * Get id of the definition.
     */
    definitionId?: number;
    /**
     * Gets definition URL.
     */
    definitionUrl?: string;
    /**
     * Get revision number of the definition.
     */
    revision?: number;
};

