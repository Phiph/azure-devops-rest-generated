/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEvent } from './JobEvent';
import type { JobMetadataMessage } from './JobMetadataMessage';
export type JobMetadataEvent = (JobEvent & {
    message?: JobMetadataMessage;
});

