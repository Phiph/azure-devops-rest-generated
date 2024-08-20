/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
export type ReleaseNotCreatedEvent = {
    definitionReference?: ReleaseDefinitionShallowReference;
    message?: string;
    releaseReason?: 'none' | 'manual' | 'continuousIntegration' | 'schedule' | 'pullRequest';
    requestedBy?: IdentityRef;
};

