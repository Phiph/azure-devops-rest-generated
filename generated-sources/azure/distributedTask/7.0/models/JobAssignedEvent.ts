/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEvent } from './JobEvent';
import type { TaskAgentJobRequest } from './TaskAgentJobRequest';
export type JobAssignedEvent = (JobEvent & {
    request?: TaskAgentJobRequest;
});

