/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base class shared by contributions and contribution types
 */
export type ContributionBase = {
    /**
     * Description of the contribution/type
     */
    description?: string;
    /**
     * Fully qualified identifier of the contribution/type
     */
    id?: string;
    /**
     * VisibleTo can be used to restrict whom can reference a given contribution/type. This value should be a list of publishers or extensions access is restricted too.  Examples: "ms" - Means only the "ms" publisher can reference this. "ms.vss-web" - Means only the "vss-web" extension from the "ms" publisher can reference this.
     */
    visibleTo?: Array<string>;
};

