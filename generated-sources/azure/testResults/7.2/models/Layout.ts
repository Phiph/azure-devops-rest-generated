/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Layout contract that defines the layouts of a session
 */
export type Layout = {
    /**
     * Layout children
     */
    children?: Array<Layout>;
    /**
     * Layout end time
     */
    endTimeUTC?: string;
    /**
     * Layout name
     */
    name?: string;
    /**
     * Layout properties
     */
    properties?: Record<string, string>;
    /**
     * Layout start time
     */
    startTimeUTC?: string;
    /**
     * Layout type
     */
    type?: string;
    /**
     * Layout uid
     */
    uid?: string;
};

