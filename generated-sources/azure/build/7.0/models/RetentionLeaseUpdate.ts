/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An update to the retention parameters of a retention lease.
 */
export type RetentionLeaseUpdate = {
    /**
     * The number of days to consider the lease valid. A retention lease valid for more than 100 years (36500 days) will display as retaining the build "forever".
     */
    daysValid?: number;
    /**
     * If set, this lease will also prevent the pipeline from being deleted while the lease is still valid.
     */
    protectPipeline?: boolean;
};

