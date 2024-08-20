/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountPreferencesInternal } from './AccountPreferencesInternal';
import type { PropertiesCollection } from './PropertiesCollection';
export type AccountCreateInfoInternal = {
    accountName?: string;
    creator?: string;
    organization?: string;
    preferences?: AccountPreferencesInternal;
    properties?: PropertiesCollection;
    serviceDefinitions?: Array<any>;
};

