/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NameValuePair } from './NameValuePair';
/**
 * Test Configuration Create or Update Parameters
 */
export type TestConfigurationCreateUpdateParameters = {
    /**
     * Description of the configuration
     */
    description?: string;
    /**
     * Is the configuration a default for the test plans
     */
    isDefault?: boolean;
    /**
     * Name of the configuration
     */
    name?: string;
    /**
     * State of the configuration
     */
    state?: 'active' | 'inactive';
    /**
     * Dictionary of Test Variable, Selected Value
     */
    values?: Array<NameValuePair>;
};

