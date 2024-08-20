/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { NameValuePair } from './NameValuePair';
import type { ShallowReference } from './ShallowReference';
/**
 * Test configuration
 */
export type TestConfiguration = {
    /**
     * Area of the configuration
     */
    area?: ShallowReference;
    /**
     * Description of the configuration
     */
    description?: string;
    /**
     * Id of the configuration
     */
    id?: number;
    /**
     * Is the configuration a default for the test plans
     */
    isDefault?: boolean;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy?: IdentityRef;
    /**
     * Last Updated Data
     */
    lastUpdatedDate?: string;
    /**
     * Name of the configuration
     */
    name?: string;
    /**
     * Project to which the configuration belongs
     */
    project?: ShallowReference;
    /**
     * Revision of the configuration
     */
    revision?: number;
    /**
     * State of the configuration
     */
    state?: 'active' | 'inactive';
    /**
     * Url of Configuration Resource
     */
    url?: string;
    /**
     * Dictionary of Test Variable, Selected Value
     */
    values?: Array<NameValuePair>;
};

