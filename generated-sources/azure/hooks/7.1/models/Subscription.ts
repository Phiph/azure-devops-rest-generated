/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Encapsulates an event subscription.
 */
export type Subscription = {
    /**
     * Reference Links
     */
    _links?: ReferenceLinks;
    actionDescription?: string;
    consumerActionId?: string;
    consumerId?: string;
    /**
     * Consumer input values
     */
    consumerInputs?: Record<string, string>;
    createdBy?: IdentityRef;
    createdDate?: string;
    eventDescription?: string;
    eventType?: string;
    id?: string;
    lastProbationRetryDate?: string;
    modifiedBy?: IdentityRef;
    modifiedDate?: string;
    probationRetries?: string;
    publisherId?: string;
    /**
     * Publisher input values
     */
    publisherInputs?: Record<string, string>;
    resourceVersion?: string;
    status?: 'enabled' | 'onProbation' | 'disabledByUser' | 'disabledBySystem' | 'disabledByInactiveIdentity';
    subscriber?: IdentityRef;
    url?: string;
};

