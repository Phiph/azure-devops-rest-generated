/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Describes a request to create a temporary query
 */
export type TemporaryQueryRequestModel = (WorkItemTrackingResource & {
    /**
     * The WIQL text of the temporary query
     */
    wiql?: string;
});

