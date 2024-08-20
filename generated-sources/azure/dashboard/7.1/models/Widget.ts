/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dashboard } from './Dashboard';
import type { LightboxOptions } from './LightboxOptions';
import type { ReferenceLinks } from './ReferenceLinks';
import type { SemanticVersion } from './SemanticVersion';
import type { WidgetPosition } from './WidgetPosition';
import type { WidgetSize } from './WidgetSize';
/**
 * Widget data
 */
export type Widget = {
    _links?: ReferenceLinks;
    /**
     * Refers to the allowed sizes for the widget. This gets populated when user wants to configure the widget
     */
    allowedSizes?: Array<WidgetSize>;
    /**
     * Read-Only Property from Dashboard Service. Indicates if settings are blocked for the current user.
     */
    areSettingsBlockedForUser?: boolean;
    /**
     * Refers to unique identifier of a feature artifact. Used for pinning+unpinning a specific artifact.
     */
    artifactId?: string;
    configurationContributionId?: string;
    configurationContributionRelativeId?: string;
    contentUri?: string;
    /**
     * The id of the underlying contribution defining the supplied Widget Configuration.
     */
    contributionId?: string;
    /**
     * Optional partial dashboard content, to support exchanging dashboard-level version ETag for widget-level APIs
     */
    dashboard?: Dashboard;
    eTag?: string;
    id?: string;
    isEnabled?: boolean;
    isNameConfigurable?: boolean;
    lightboxOptions?: LightboxOptions;
    loadingImageUrl?: string;
    name?: string;
    position?: WidgetPosition;
    settings?: string;
    settingsVersion?: SemanticVersion;
    size?: WidgetSize;
    typeId?: string;
    url?: string;
};

