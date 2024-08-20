/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
import type { TaskAgentPoolReference } from './TaskAgentPoolReference';
/**
 * Represents a queue for running builds.
 */
export type AgentPoolQueue = {
    _links?: ReferenceLinks;
    /**
     * The ID of the queue.
     */
    id?: number;
    /**
     * The name of the queue.
     */
    name?: string;
    /**
     * The pool used by this queue.
     */
    pool?: TaskAgentPoolReference;
    /**
     * The full http link to the resource.
     */
    url?: string;
};

