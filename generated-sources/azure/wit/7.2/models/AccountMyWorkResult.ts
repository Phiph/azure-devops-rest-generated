/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountWorkWorkItemModel } from './AccountWorkWorkItemModel';
export type AccountMyWorkResult = {
    /**
     * True, when length of WorkItemDetails is same as the limit
     */
    querySizeLimitExceeded?: boolean;
    /**
     * WorkItem Details
     */
    workItemDetails?: Array<AccountWorkWorkItemModel>;
};

