/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RepositoryResourceParameters = {
    refName?: string;
    /**
     * This is the security token to use when connecting to the repository.
     */
    token?: string;
    /**
     * Optional. This is the type of the token given. If not provided, a type of "Bearer" is assumed. Note: Use "Basic" for a PAT token.
     */
    tokenType?: string;
    version?: string;
};

