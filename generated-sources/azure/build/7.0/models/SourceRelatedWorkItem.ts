/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Represents a work item related to some source item. These are retrieved from Source Providers.
 */
export type SourceRelatedWorkItem = {
    _links?: ReferenceLinks;
    /**
     * Identity ref for the person that the work item is assigned to.
     */
    assignedTo?: IdentityRef;
    /**
     * Current state of the work item, e.g. Active, Resolved, Closed, etc.
     */
    currentState?: string;
    /**
     * Long description for the work item.
     */
    description?: string;
    /**
     * Unique identifier for the work item
     */
    id?: string;
    /**
     * The name of the provider the work item is associated with.
     */
    providerName?: string;
    /**
     * Short name for the work item.
     */
    title?: string;
    /**
     * Type of work item, e.g. Bug, Task, User Story, etc.
     */
    type?: string;
};

