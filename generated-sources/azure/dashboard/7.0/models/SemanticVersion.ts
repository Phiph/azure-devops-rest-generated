/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * versioning for an artifact as described at: http://semver.org/, of the form major.minor.patch.
 */
export type SemanticVersion = {
    /**
     * Major version when you make incompatible API changes
     */
    major?: number;
    /**
     * Minor version when you add functionality in a backwards-compatible manner
     */
    minor?: number;
    /**
     * Patch version when you make backwards-compatible bug fixes
     */
    patch?: number;
};

