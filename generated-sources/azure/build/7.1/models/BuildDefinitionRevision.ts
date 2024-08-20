/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Represents a revision of a build definition.
 */
export type BuildDefinitionRevision = {
    /**
     * The identity of the person or process that changed the definition.
     */
    changedBy?: IdentityRef;
    /**
     * The date and time that the definition was changed.
     */
    changedDate?: string;
    /**
     * The change type (add, edit, delete).
     */
    changeType?: 'add' | 'update' | 'delete';
    /**
     * The comment associated with the change.
     */
    comment?: string;
    /**
     * A link to the definition at this revision.
     */
    definitionUrl?: string;
    /**
     * The name of the definition.
     */
    name?: string;
    /**
     * The revision number.
     */
    revision?: number;
};

