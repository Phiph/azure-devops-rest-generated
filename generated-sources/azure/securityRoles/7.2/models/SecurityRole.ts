/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SecurityRole = {
    /**
     * Permissions the role is allowed.
     */
    allowPermissions?: number;
    /**
     * Permissions the role is denied.
     */
    denyPermissions?: number;
    /**
     * Description of user access defined by the role
     */
    description?: string;
    /**
     * User friendly name of the role.
     */
    displayName?: string;
    /**
     * Globally unique identifier for the role.
     */
    identifier?: string;
    /**
     * Unique name of the role in the scope.
     */
    name?: string;
    /**
     * Returns the id of the ParentScope.
     */
    scope?: string;
};

