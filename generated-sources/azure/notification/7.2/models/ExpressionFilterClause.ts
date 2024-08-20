/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Subscription Filter Clause represents a single clause in a subscription filter e.g. If the subscription has the following criteria "Project Name = [Current Project] AND Assigned To = [Me] it will be represented as two Filter Clauses Clause 1: Index = 1, Logical Operator: NULL  , FieldName = 'Project Name', Operator = '=', Value = '[Current Project]' Clause 2: Index = 2, Logical Operator: 'AND' , FieldName = 'Assigned To' , Operator = '=', Value = '[Me]'
 */
export type ExpressionFilterClause = {
    fieldName?: string;
    /**
     * The order in which this clause appeared in the filter query
     */
    index?: number;
    /**
     * Logical Operator 'AND', 'OR' or NULL (only for the first clause in the filter)
     */
    logicalOperator?: string;
    operator?: string;
    value?: string;
};

