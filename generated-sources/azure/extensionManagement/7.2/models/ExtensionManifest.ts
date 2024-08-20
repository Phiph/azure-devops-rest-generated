/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contribution } from './Contribution';
import type { ContributionConstraint } from './ContributionConstraint';
import type { ContributionType } from './ContributionType';
import type { ExtensionEventCallbackCollection } from './ExtensionEventCallbackCollection';
import type { ExtensionLicensing } from './ExtensionLicensing';
/**
 * Base class for extension properties which are shared by the extension manifest and the extension model
 */
export type ExtensionManifest = {
    /**
     * Uri used as base for other relative uri's defined in extension
     */
    baseUri?: string;
    /**
     * List of shared constraints defined by this extension
     */
    constraints?: Array<ContributionConstraint>;
    /**
     * List of contributions made by this extension
     */
    contributions?: Array<Contribution>;
    /**
     * List of contribution types defined by this extension
     */
    contributionTypes?: Array<ContributionType>;
    /**
     * List of explicit demands required by this extension
     */
    demands?: Array<string>;
    /**
     * Collection of endpoints that get called when particular extension events occur
     */
    eventCallbacks?: ExtensionEventCallbackCollection;
    /**
     * Secondary location that can be used as base for other relative uri's defined in extension
     */
    fallbackBaseUri?: string;
    /**
     * Language Culture Name set by the Gallery
     */
    language?: string;
    /**
     * How this extension behaves with respect to licensing
     */
    licensing?: ExtensionLicensing;
    /**
     * Version of the extension manifest format/content
     */
    manifestVersion?: number;
    /**
     * Default user claims applied to all contributions (except the ones which have been specified restrictedTo explicitly) to control the visibility of a contribution.
     */
    restrictedTo?: Array<string>;
    /**
     * List of all oauth scopes required by this extension
     */
    scopes?: Array<string>;
    /**
     * The ServiceInstanceType(Guid) of the VSTS service that must be available to an account in order for the extension to be installed
     */
    serviceInstanceType?: string;
};

