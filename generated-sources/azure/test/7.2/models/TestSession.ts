/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { PropertyBag } from './PropertyBag';
import type { ShallowReference } from './ShallowReference';
/**
 * Test Session
 */
export type TestSession = {
    /**
     * Area path of the test session
     */
    area?: ShallowReference;
    /**
     * Comments in the test session
     */
    comment?: string;
    /**
     * Duration of the session
     */
    endDate?: string;
    /**
     * Id of the test session
     */
    id?: number;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy?: IdentityRef;
    /**
     * Last updated date
     */
    lastUpdatedDate?: string;
    /**
     * Owner of the test session
     */
    owner?: IdentityRef;
    /**
     * Project to which the test session belongs
     */
    project?: ShallowReference;
    /**
     * Generic store for test session data
     */
    propertyBag?: PropertyBag;
    /**
     * Revision of the test session
     */
    revision?: number;
    /**
     * Source of the test session
     */
    source?: 'unknown' | 'xtDesktop' | 'feedbackDesktop' | 'xtWeb' | 'feedbackWeb' | 'xtDesktop2' | 'sessionInsightsForAll';
    /**
     * Start date
     */
    startDate?: string;
    /**
     * State of the test session
     */
    state?: 'unspecified' | 'notStarted' | 'inProgress' | 'paused' | 'completed' | 'declined';
    /**
     * Title of the test session
     */
    title?: string;
    /**
     * Url of Test Session Resource
     */
    url?: string;
};

