/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The base class for all resource containers, i.e. Account, Collection, Project
 */
export type ResourceContainer = {
    /**
     * Gets or sets the container's base URL, i.e. the URL of the host (collection, application, or deployment) containing the container resource.
     */
    baseUrl?: string;
    /**
     * Gets or sets the container's specific Id.
     */
    id?: string;
    /**
     * Gets or sets the container's name.
     */
    name?: string;
    /**
     * Gets or sets the container's REST API URL.
     */
    url?: string;
};

