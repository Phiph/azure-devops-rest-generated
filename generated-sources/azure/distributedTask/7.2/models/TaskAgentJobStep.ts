/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentJobTask } from './TaskAgentJobTask';
export type TaskAgentJobStep = {
    condition?: string;
    continueOnError?: boolean;
    enabled?: boolean;
    env?: Record<string, string>;
    id?: string;
    inputs?: Record<string, string>;
    name?: string;
    retryCountOnTaskFailure?: number;
    task?: TaskAgentJobTask;
    timeoutInMinutes?: number;
    type?: 'task' | 'action';
};

