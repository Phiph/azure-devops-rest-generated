/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a dependency.
 */
export type Dependency = {
    /**
     * The event. The dependency is satisfied when the referenced object emits this event.
     */
    event?: string;
    /**
     * The scope. This names the object referenced by the dependency.
     */
    scope?: string;
};

