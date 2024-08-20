/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OAuthConfiguration } from './OAuthConfiguration';
import type { Parameter } from './Parameter';
export type AuthConfiguration = (OAuthConfiguration & {
    /**
     * Gets or sets parameters contained in configuration object.
     */
    parameters?: Record<string, Parameter>;
});

