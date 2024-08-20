/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An extension assigned to a user
 */
export type Extension = {
    /**
     * Assignment source for this extension. I.e. explicitly assigned or from a group rule.
     */
    assignmentSource?: 'none' | 'unknown' | 'groupRule';
    /**
     * Gallery Id of the Extension.
     */
    id?: string;
    /**
     * Friendly name of this extension.
     */
    name?: string;
    /**
     * Source of this extension assignment. Ex: msdn, account, none, etc.
     */
    source?: 'none' | 'account' | 'msdn' | 'profile' | 'auto' | 'trial';
};

