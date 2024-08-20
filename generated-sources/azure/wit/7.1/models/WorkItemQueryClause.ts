/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemFieldOperation } from './WorkItemFieldOperation';
import type { WorkItemFieldReference } from './WorkItemFieldReference';
/**
 * Represents a clause in a work item query. This shows the structure of a work item query.
 */
export type WorkItemQueryClause = {
    /**
     * Child clauses if the current clause is a logical operator
     */
    clauses?: Array<WorkItemQueryClause>;
    /**
     * Field associated with condition
     */
    field?: WorkItemFieldReference;
    /**
     * Right side of the condition when a field to field comparison
     */
    fieldValue?: WorkItemFieldReference;
    /**
     * Determines if this is a field to field comparison
     */
    isFieldValue?: boolean;
    /**
     * Logical operator separating the condition clause
     */
    logicalOperator?: 'none' | 'and' | 'or';
    /**
     * The field operator
     */
    operator?: WorkItemFieldOperation;
    /**
     * Right side of the condition when a field to value comparison
     */
    value?: string;
};

