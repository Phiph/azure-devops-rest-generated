/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Defines the setting result that matched a setting search request
 */
export type SettingResult = {
    /**
     * Description of the settings page
     */
    description?: string;
    /**
     * Icon name of the settings page
     */
    icon?: string;
    /**
     * Contribution url route id of the corresponding settings page
     */
    routeId?: string;
    /**
     * Contribution url route parameter of the corresponding settings page
     */
    routeParameterMapping?: Record<string, string>;
    /**
     * Scope of the settings page, either organization, project or user
     */
    scope?: 'none' | 'organization' | 'project' | 'user';
    /**
     * Title of the settings page
     */
    title?: string;
};

