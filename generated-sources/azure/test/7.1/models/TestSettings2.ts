/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Represents the test settings of the run. Used to create test settings and fetch test settings
 */
export type TestSettings2 = {
    /**
     * Area path required to create test settings
     */
    areaPath?: string;
    createdBy?: IdentityRef;
    createdDate?: string;
    /**
     * Description of the test settings. Used in create test settings.
     */
    description?: string;
    /**
     * Indicates if the tests settings is public or private.Used in create test settings.
     */
    isPublic?: boolean;
    lastUpdatedBy?: IdentityRef;
    lastUpdatedDate?: string;
    /**
     * Xml string of machine roles. Used in create test settings.
     */
    machineRoles?: string;
    /**
     * Test settings content.
     */
    testSettingsContent?: string;
    /**
     * Test settings id.
     */
    testSettingsId?: number;
    /**
     * Test settings name.
     */
    testSettingsName?: string;
};

