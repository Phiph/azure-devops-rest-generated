/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildUpdatedEvent } from './BuildUpdatedEvent';
export type BuildTagsAddedEvent = (BuildUpdatedEvent & {
    allTags?: Array<string>;
    newTags?: Array<string>;
});

