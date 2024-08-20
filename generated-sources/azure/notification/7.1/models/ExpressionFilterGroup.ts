/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a hierarchy of SubscritionFilterClauses that have been grouped together through either adding a group in the WebUI or using parethesis in the Subscription condition string
 */
export type ExpressionFilterGroup = {
    /**
     * The index of the last FilterClause in this group
     */
    end?: number;
    /**
     * Level of the group, since groups can be nested for each nested group the level will increase by 1
     */
    level?: number;
    /**
     * The index of the first FilterClause in this group
     */
    start?: number;
};

