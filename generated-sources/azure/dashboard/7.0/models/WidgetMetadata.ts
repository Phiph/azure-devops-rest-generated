/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LightboxOptions } from './LightboxOptions';
import type { WidgetSize } from './WidgetSize';
/**
 * Contribution based information describing Dashboard Widgets.
 */
export type WidgetMetadata = {
    /**
     * Sizes supported by the Widget.
     */
    allowedSizes?: Array<WidgetSize>;
    /**
     * Opt-in boolean that indicates if the widget requires the Analytics Service to function. Widgets requiring the analytics service are hidden from the catalog if the Analytics Service is not available.
     */
    analyticsServiceRequired?: boolean;
    /**
     * Resource for an icon in the widget catalog.
     */
    catalogIconUrl?: string;
    /**
     * Opt-in URL string pointing at widget information. Defaults to extension marketplace URL if omitted
     */
    catalogInfoUrl?: string;
    /**
     * The id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionId?: string;
    /**
     * The relative id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionRelativeId?: string;
    /**
     * Indicates if the widget requires configuration before being added to dashboard.
     */
    configurationRequired?: boolean;
    /**
     * Uri for the widget content to be loaded from .
     */
    contentUri?: string;
    /**
     * The id of the underlying contribution defining the supplied Widget.
     */
    contributionId?: string;
    /**
     * Optional default settings to be copied into widget settings.
     */
    defaultSettings?: string;
    /**
     * Summary information describing the widget.
     */
    description?: string;
    /**
     * Widgets can be disabled by the app store.  We'll need to gracefully handle for: - persistence (Allow) - Requests (Tag as disabled, and provide context)
     */
    isEnabled?: boolean;
    /**
     * Opt-out boolean that indicates if the widget supports widget name/title configuration. Widgets ignoring the name should set it to false in the manifest.
     */
    isNameConfigurable?: boolean;
    /**
     * Opt-out boolean indicating if the widget is hidden from the catalog. Commonly, this is used to allow developers to disable creation of a deprecated widget. A widget must have a functional default state, or have a configuration experience, in order to be visible from the catalog.
     */
    isVisibleFromCatalog?: boolean;
    /**
     * Keywords associated with this widget, non-filterable and invisible
     */
    keywords?: Array<string>;
    /**
     * Opt-in properties for customizing widget presentation in a "lightbox" dialog.
     */
    lightboxOptions?: LightboxOptions;
    /**
     * Resource for a loading placeholder image on dashboard
     */
    loadingImageUrl?: string;
    /**
     * User facing name of the widget type. Each widget must use a unique value here.
     */
    name?: string;
    /**
     * Publisher Name of this kind of widget.
     */
    publisherName?: string;
    /**
     * Data contract required for the widget to function and to work in its container.
     */
    supportedScopes?: Array<'collection_User' | 'project_Team'>;
    /**
     * Tags associated with this widget, visible on each widget and filterable.
     */
    tags?: Array<string>;
    /**
     * Contribution target IDs
     */
    targets?: Array<string>;
    /**
     * Deprecated: locally unique developer-facing id of this kind of widget. ContributionId provides a globally unique identifier for widget types.
     */
    typeId?: string;
};

