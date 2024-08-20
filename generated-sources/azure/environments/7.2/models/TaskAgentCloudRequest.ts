/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';
import type { TaskAgentReference } from './TaskAgentReference';
export type TaskAgentCloudRequest = {
    agent?: TaskAgentReference;
    agentCloudId?: number;
    agentConnectedTime?: string;
    agentData?: string;
    agentSpecification?: string;
    pool?: TaskAgentPoolReference;
    provisionedTime?: string;
    provisionRequestTime?: string;
    releaseRequestTime?: string;
    requestId?: string;
};

