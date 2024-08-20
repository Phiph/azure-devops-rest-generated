/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { XamlBuildReference } from './XamlBuildReference';
export type BuildSummary = {
    build?: XamlBuildReference;
    finishTime?: string;
    keepForever?: boolean;
    quality?: string;
    reason?: 'none' | 'manual' | 'individualCI' | 'batchedCI' | 'schedule' | 'scheduleForced' | 'userCreated' | 'validateShelveset' | 'checkInShelveset' | 'pullRequest' | 'buildCompletion' | 'resourceTrigger' | 'triggered' | 'all';
    requestedFor?: IdentityRef;
    startTime?: string;
    status?: 'none' | 'inProgress' | 'completed' | 'cancelling' | 'postponed' | 'notStarted' | 'all';
};

