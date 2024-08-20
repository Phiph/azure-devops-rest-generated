/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityReference } from './IdentityReference';
import type { WorkItemFieldReference } from './WorkItemFieldReference';
import type { WorkItemQueryClause } from './WorkItemQueryClause';
import type { WorkItemQuerySortColumn } from './WorkItemQuerySortColumn';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Represents an item in the work item query hierarchy. This can be either a query or a folder.
 */
export type QueryHierarchyItem = (WorkItemTrackingResource & {
    /**
     * The child query items inside a query folder.
     */
    children?: Array<QueryHierarchyItem>;
    /**
     * The clauses for a flat query.
     */
    clauses?: WorkItemQueryClause;
    /**
     * The columns of the query.
     */
    columns?: Array<WorkItemFieldReference>;
    /**
     * The identity who created the query item.
     */
    createdBy?: IdentityReference;
    /**
     * When the query item was created.
     */
    createdDate?: string;
    /**
     * The link query mode.
     */
    filterOptions?: 'workItems' | 'linksOneHopMustContain' | 'linksOneHopMayContain' | 'linksOneHopDoesNotContain' | 'linksRecursiveMustContain' | 'linksRecursiveMayContain' | 'linksRecursiveDoesNotContain';
    /**
     * If this is a query folder, indicates if it contains any children.
     */
    hasChildren?: boolean;
    /**
     * The id of the query item.
     */
    id?: string;
    /**
     * Indicates if this query item is deleted. Setting this to false on a deleted query item will undelete it. Undeleting a query or folder will not bring back the permission changes that were previously applied to it.
     */
    isDeleted?: boolean;
    /**
     * Indicates if this is a query folder or a query.
     */
    isFolder?: boolean;
    /**
     * Indicates if the WIQL of this query is invalid. This could be due to invalid syntax or a no longer valid area/iteration path.
     */
    isInvalidSyntax?: boolean;
    /**
     * Indicates if this query item is public or private.
     */
    isPublic?: boolean;
    /**
     * The identity who last ran the query.
     */
    lastExecutedBy?: IdentityReference;
    /**
     * When the query was last run.
     */
    lastExecutedDate?: string;
    /**
     * The identity who last modified the query item.
     */
    lastModifiedBy?: IdentityReference;
    /**
     * When the query item was last modified.
     */
    lastModifiedDate?: string;
    /**
     * The link query clause.
     */
    linkClauses?: WorkItemQueryClause;
    /**
     * The name of the query item.
     */
    name?: string;
    /**
     * The path of the query item.
     */
    path?: string;
    /**
     * The recursion option for use in a tree query.
     */
    queryRecursionOption?: 'parentFirst' | 'childFirst';
    /**
     * The type of query.
     */
    queryType?: 'flat' | 'tree' | 'oneHop';
    /**
     * The sort columns of the query.
     */
    sortColumns?: Array<WorkItemQuerySortColumn>;
    /**
     * The source clauses in a tree or one-hop link query.
     */
    sourceClauses?: WorkItemQueryClause;
    /**
     * The target clauses in a tree or one-hop link query.
     */
    targetClauses?: WorkItemQueryClause;
    /**
     * The WIQL text of the query
     */
    wiql?: string;
});

