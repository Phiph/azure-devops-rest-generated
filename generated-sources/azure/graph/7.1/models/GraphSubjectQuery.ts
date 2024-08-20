/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Subject to search using the Graph API
 */
export type GraphSubjectQuery = {
    /**
     * Search term to search for Azure Devops users or/and groups
     */
    query?: string;
    /**
     * Optional parameter. Specify a non-default scope (collection, project) to search for users or groups within the scope.
     */
    scopeDescriptor?: string;
    /**
     * "User" or "Group" can be specified, both or either
     */
    subjectKind?: Array<string>;
};

