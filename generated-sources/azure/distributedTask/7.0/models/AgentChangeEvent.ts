/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskAgent } from './TaskAgent';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';
export type AgentChangeEvent = {
    agent?: TaskAgent;
    eventType?: string;
    pool?: TaskAgentPoolReference;
};

