/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of accounts for a specific owner or a specific member. One of the following parameters is required: ownerId, memberId.
     * @returns Account successful operation
     * @throws ApiError
     */
    public accountsList({
        ownerId,
        memberId,
        properties,
    }: {
        /**
         * ID for the owner of the accounts.
         */
        ownerId?: string,
        /**
         * ID for a member of the accounts.
         */
        memberId?: string,
        properties?: string,
    }): CancelablePromise<Array<Account>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/_apis/accounts',
            query: {
                'ownerId': ownerId,
                'memberId': memberId,
                'properties': properties,
            },
        });
    }
}
