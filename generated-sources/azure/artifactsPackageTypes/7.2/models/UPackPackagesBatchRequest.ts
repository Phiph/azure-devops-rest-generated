/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchOperationData } from './BatchOperationData';
import type { MinimalPackageDetails } from './MinimalPackageDetails';
/**
 * A batch of operations to apply to package versions.
 */
export type UPackPackagesBatchRequest = {
    /**
     * Data required to perform the operation. This is optional based on the type of the operation. Use BatchPromoteData if performing a promote operation.
     */
    data?: BatchOperationData;
    /**
     * Type of operation that needs to be performed on packages.
     */
    operation?: 'promote' | 'delete' | 'permanentDelete' | 'restoreToFeed';
    /**
     * The packages onto which the operation will be performed.
     */
    packages?: Array<MinimalPackageDetails>;
};

