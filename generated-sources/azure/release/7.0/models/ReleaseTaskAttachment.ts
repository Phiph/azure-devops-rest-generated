/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
export type ReleaseTaskAttachment = {
    /**
     * Reference links of task.
     */
    _links?: ReferenceLinks;
    /**
     * Data and time when it created.
     */
    createdOn?: string;
    /**
     * Identity who modified.
     */
    modifiedBy?: IdentityRef;
    /**
     * Data and time when modified.
     */
    modifiedOn?: string;
    /**
     * Name of the task attachment.
     */
    name?: string;
    /**
     * Record ID of the task.
     */
    recordId?: string;
    /**
     * Timeline ID of the task.
     */
    timelineId?: string;
    /**
     * Type of task attachment.
     */
    type?: string;
};

