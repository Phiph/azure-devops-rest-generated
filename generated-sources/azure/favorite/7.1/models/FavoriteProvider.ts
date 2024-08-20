/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FavoritesSecuredObject } from './FavoritesSecuredObject';
/**
 * Exposes a provider of favorites.
 */
export type FavoriteProvider = (FavoritesSecuredObject & {
    /**
     * Favorite artifact type
     */
    artifactType?: string;
    /**
     * URI for retrieving favorite artifacts
     */
    artifactUri?: string;
    /**
     * contributed client side service that is available for this provider to provide dynamic associated data.
     */
    clientServiceIdentifier?: string;
    /**
     * Contribution Id
     */
    contributionId?: string;
    /**
     * Css class to be applied to the icon for the artifact.
     */
    iconClass?: string;
    /**
     * Name of the fabric icon to be applied for the artifact
     */
    iconName?: string;
    /**
     * Group of favorites will be rendered in this order, 0 is top If 2 types share order, they will be coalesced into a single group
     */
    order?: number;
    /**
     * Name used for rendering the title of each group of favorites
     */
    pluralName?: string;
    /**
     * Service identifier of the service.
     */
    serviceIdentifier?: string;
    /**
     * Base URI of the service
     */
    serviceUri?: string;
});

