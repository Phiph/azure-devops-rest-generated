/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobRequestMessage } from './JobRequestMessage';
import type { TaskDefinition } from './TaskDefinition';
import type { TaskInstance } from './TaskInstance';
export type ServerTaskRequestMessage = (JobRequestMessage & {
    taskDefinition?: TaskDefinition;
    taskInstance?: TaskInstance;
});

