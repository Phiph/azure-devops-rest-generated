/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
import type { ReleaseEnvironmentShallowReference } from './ReleaseEnvironmentShallowReference';
import type { ReleaseShallowReference } from './ReleaseShallowReference';
export type ManualIntervention = {
    /**
     * Gets or sets the identity who should approve.
     */
    approver?: IdentityRef;
    /**
     * Gets or sets comments for approval.
     */
    comments?: string;
    /**
     * Gets date on which it got created.
     */
    createdOn?: string;
    /**
     * Gets the unique identifier for manual intervention.
     */
    id?: number;
    /**
     * Gets or sets instructions for approval.
     */
    instructions?: string;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: string;
    /**
     * Gets or sets the name.
     */
    name?: string;
    /**
     * Gets releaseReference for manual intervention.
     */
    release?: ReleaseShallowReference;
    /**
     * Gets releaseDefinitionReference for manual intervention.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference for manual intervention.
     */
    releaseEnvironment?: ReleaseEnvironmentShallowReference;
    /**
     * Gets or sets the status of the manual intervention.
     */
    status?: 'unknown' | 'pending' | 'rejected' | 'approved' | 'canceled';
    /**
     * Get task instance identifier.
     */
    taskInstanceId?: string;
    /**
     * Gets url to access the manual intervention.
     */
    url?: string;
};

