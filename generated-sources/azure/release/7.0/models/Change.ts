/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Represents a change associated with a build.
 */
export type Change = {
    /**
     * The author of the change.
     */
    author?: IdentityRef;
    /**
     * The type of source. "TfsVersionControl", "TfsGit", etc.
     */
    changeType?: string;
    /**
     * The location of a user-friendly representation of the resource.
     */
    displayUri?: string;
    /**
     * Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
     */
    id?: string;
    /**
     * The location of the full representation of the resource.
     */
    location?: string;
    /**
     * A description of the change. This might be a commit message or changeset description.
     */
    message?: string;
    /**
     * The person or process that pushed the change.
     */
    pushedBy?: IdentityRef;
    /**
     * A timestamp for the change.
     */
    timestamp?: string;
};

