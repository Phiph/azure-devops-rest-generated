/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessControlEntry } from './AccessControlEntry';
/**
 * The AccessControlList class is meant to associate a set of AccessControlEntries with a security token and its inheritance settings.
 */
export type AccessControlList = {
    /**
     * Storage of permissions keyed on the identity the permission is for.
     */
    acesDictionary?: Record<string, AccessControlEntry>;
    /**
     * True if this ACL holds ACEs that have extended information.
     */
    includeExtendedInfo?: boolean;
    /**
     * True if the given token inherits permissions from parents.
     */
    inheritPermissions?: boolean;
    /**
     * The token that this AccessControlList is for.
     */
    token?: string;
};

