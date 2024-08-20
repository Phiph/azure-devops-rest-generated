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
     * The location of a user-friendly representation of the resource.
     */
    displayUri?: string;
    /**
     * The identifier for the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset ID.
     */
    id?: string;
    /**
     * The location of the full representation of the resource.
     */
    location?: string;
    /**
     * The description of the change. This might be a commit message or changeset description.
     */
    message?: string;
    /**
     * Indicates whether the message was truncated.
     */
    messageTruncated?: boolean;
    /**
     * The person or process that pushed the change.
     */
    pusher?: string;
    /**
     * The timestamp for the change.
     */
    timestamp?: string;
    /**
     * The type of change. "commit", "changeset", etc.
     */
    type?: string;
};

