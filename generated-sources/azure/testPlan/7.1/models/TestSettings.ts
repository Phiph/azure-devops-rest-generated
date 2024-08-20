/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the test settings of the run. Used to create test settings and fetch test settings
 */
export type TestSettings = {
    /**
     * Area path required to create test settings
     */
    areaPath?: string;
    /**
     * Description of the test settings. Used in create test settings.
     */
    description?: string;
    /**
     * Indicates if the tests settings is public or private.Used in create test settings.
     */
    isPublic?: boolean;
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

