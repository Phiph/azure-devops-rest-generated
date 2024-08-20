/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityReference } from './IdentityReference';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
export type WorkItemHistory = (WorkItemTrackingResource & {
    rev?: number;
    revisedBy?: IdentityReference;
    revisedDate?: string;
    value?: string;
});

