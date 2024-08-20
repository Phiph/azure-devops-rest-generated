/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskEvent } from './TaskEvent';
export type TaskCompletedEvent = (TaskEvent & {
    /**
     * The api request was no delivered successfully
     */
    deliveryFailed?: boolean;
    /**
     * The result of the task.
     */
    result?: 'succeeded' | 'succeededWithIssues' | 'failed' | 'canceled' | 'skipped' | 'abandoned';
});

