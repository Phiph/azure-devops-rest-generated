/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This type is the subset of fields that can be provided by the user to create a Vsts scope. Scope creation is currently limited to internal back-compat scenarios. End users that attempt to create a scope with this API will fail.
 */
export type GraphScopeCreationContext = {
    /**
     * Set this field to override the default description of this scope's admin group.
     */
    adminGroupDescription?: string;
    /**
     * All scopes have an Administrator Group that controls access to the contents of the scope. Set this field to use a non-default group name for that administrators group.
     */
    adminGroupName?: string;
    /**
     * Set this optional field if this scope is created on behalf of a user other than the user making the request. This should be the Id of the user that is not the requester.
     */
    creatorId?: string;
    /**
     * The scope must be provided with a unique name within the parent scope. This means the created scope can have a parent or child with the same name, but no siblings with the same name.
     */
    name?: string;
    /**
     * The type of scope being created.
     */
    scopeType?: 'generic' | 'serviceHost' | 'teamProject';
    /**
     * An optional ID that uniquely represents the scope within it's parent scope. If this parameter is not provided, Vsts will generate on automatically.
     */
    storageKey?: string;
};

