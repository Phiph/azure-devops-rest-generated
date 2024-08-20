/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionBadge } from './ExtensionBadge';
import type { ExtensionFile } from './ExtensionFile';
export type ExtensionVersion = {
    assetUri?: string;
    badges?: Array<ExtensionBadge>;
    fallbackAssetUri?: string;
    files?: Array<ExtensionFile>;
    flags?: 'none' | 'validated';
    lastUpdated?: string;
    properties?: Array<any>;
    targetPlatform?: string;
    validationResultMessage?: string;
    version?: string;
    versionDescription?: string;
};

