/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a shallow reference to a TeamProject.
 */
export type TeamProjectReference = {
    /**
     * Project abbreviation.
     */
    abbreviation?: string;
    /**
     * Url to default team identity image.
     */
    defaultTeamImageUrl?: string;
    /**
     * The project's description (if any).
     */
    description?: string;
    /**
     * Project identifier.
     */
    id?: string;
    /**
     * Project last update time.
     */
    lastUpdateTime?: string;
    /**
     * Project name.
     */
    name?: string;
    /**
     * Project revision.
     */
    revision?: number;
    /**
     * Project state.
     */
    state?: 'deleting' | 'new' | 'wellFormed' | 'createPending' | 'all' | 'unchanged' | 'deleted';
    /**
     * Url to the full version of the object.
     */
    url?: string;
    /**
     * Project visibility.
     */
    visibility?: 'private' | 'public';
};

