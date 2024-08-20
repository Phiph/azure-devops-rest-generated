/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Clone options for cloning the test suite.
 */
export type CloneOptions = {
    /**
     * If set to true requirements will be cloned
     */
    cloneRequirements?: boolean;
    /**
     * copy all suites from a source plan
     */
    copyAllSuites?: boolean;
    /**
     * copy ancestor hierarchy
     */
    copyAncestorHierarchy?: boolean;
    /**
     * Name of the workitem type of the clone
     */
    destinationWorkItemType?: string;
    /**
     * Key value pairs where the key value is overridden by the value.
     */
    overrideParameters?: Record<string, string>;
    /**
     * Comment on the link that will link the new clone  test case to the original Set null for no comment
     */
    relatedLinkComment?: string;
};

