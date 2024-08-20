/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExpressionFilterClause } from './ExpressionFilterClause';
import type { ExpressionFilterGroup } from './ExpressionFilterGroup';
export type ExpressionFilterModel = {
    /**
     * Flat list of clauses in this subscription
     */
    clauses?: Array<ExpressionFilterClause>;
    /**
     * Grouping of clauses in the subscription
     */
    groups?: Array<ExpressionFilterGroup>;
    /**
     * Max depth of the Subscription tree
     */
    maxGroupLevel?: number;
};

