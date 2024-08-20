/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentReference } from './TaskAgentReference';
export type TaskAgentPoolMaintenanceJobTargetAgent = {
    agent?: TaskAgentReference;
    jobId?: number;
    result?: 'succeeded' | 'failed' | 'canceled';
    status?: 'inProgress' | 'completed' | 'cancelling' | 'queued';
};

