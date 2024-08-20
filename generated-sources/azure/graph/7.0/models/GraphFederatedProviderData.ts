/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a set of data used to communicate with a federated provider on behalf of a particular user.
 */
export type GraphFederatedProviderData = {
    /**
     * The access token that can be used to communicated with the federated provider on behalf on the target identity, if we were able to successfully acquire one, otherwise <code>null</code>, if we were not.
     */
    accessToken?: string;
    /**
     * The name of the federated provider, e.g. "github.com".
     */
    providerName?: string;
    /**
     * The descriptor of the graph subject to which this federated provider data corresponds.
     */
    subjectDescriptor?: string;
    /**
     * The version number of this federated provider data, which corresponds to when it was last updated. Can be used to prevent returning stale provider data from the cache when the caller is aware of a newer version, such as to prevent local cache poisoning from a remote cache or store. This is the app layer equivalent of the data layer sequence ID.
     */
    version?: number;
};

