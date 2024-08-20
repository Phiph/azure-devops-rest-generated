/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
import type { WorkItemTrackingResourceReference } from './WorkItemTrackingResourceReference';
/**
 * Base class for WIT REST resources.
 */
export type WorkItemTrackingResource = (WorkItemTrackingResourceReference & {
    /**
     * Link references to related REST resources.
     */
    _links?: ReferenceLinks;
});

