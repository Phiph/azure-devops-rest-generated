/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LiveSiteEventAuthor } from './LiveSiteEventAuthor';
export type LiveSiteEventLog = {
    author?: LiveSiteEventAuthor;
    creationDateTime?: string;
    description?: string;
    descriptionMd?: string;
    id?: number;
    isDeleted?: boolean;
    lastUpdatedDateTime?: string;
    scopeType?: 'geography' | 'organization';
    type?: 'event' | 'postmortem' | 'notification';
};

