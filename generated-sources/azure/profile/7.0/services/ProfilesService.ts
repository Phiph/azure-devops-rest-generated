/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Profile } from '../models/Profile';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProfilesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a user profile.
     * @returns Profile successful operation
     * @throws ApiError
     */
    public profilesGet({
        id,
        details,
        withAttributes,
        partition,
        coreAttributes,
        forceRefresh,
    }: {
        /**
         * The ID of the target user profile within the same organization, or 'me' to get the profile of the current authenticated user.
         */
        id: string,
        /**
         * Return public profile information such as display name, email address, country, etc. If false, the withAttributes parameter is ignored.
         */
        details?: boolean,
        /**
         * If true, gets the attributes (named key-value pairs of arbitrary data) associated with the profile. The partition parameter must also have a value.
         */
        withAttributes?: boolean,
        /**
         * The partition (named group) of attributes to return.
         */
        partition?: string,
        /**
         * A comma-delimited list of core profile attributes to return. Valid values are Email, Avatar, DisplayName, and ContactWithOffers.
         */
        coreAttributes?: string,
        /**
         * Not used in this version of the API.
         */
        forceRefresh?: boolean,
    }): CancelablePromise<Profile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/_apis/profile/profiles/{id}',
            path: {
                'id': id,
            },
            query: {
                'details': details,
                'withAttributes': withAttributes,
                'partition': partition,
                'coreAttributes': coreAttributes,
                'forceRefresh': forceRefresh,
            },
        });
    }
}
