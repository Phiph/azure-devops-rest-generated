/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItem } from './WorkItem';
import type { WorkItemDeleteReference } from './WorkItemDeleteReference';
/**
 * Full deleted work item object. Includes the work item itself.
 */
export type WorkItemDelete = (WorkItemDeleteReference & {
    /**
     * The work item object that was deleted.
     */
    resource?: WorkItem;
});

