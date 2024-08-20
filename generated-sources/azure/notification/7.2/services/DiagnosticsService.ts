/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionDiagnostics } from '../models/SubscriptionDiagnostics';
import type { UpdateSubscripitonDiagnosticsParameters } from '../models/UpdateSubscripitonDiagnosticsParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DiagnosticsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the diagnostics settings for a subscription.
     * @returns SubscriptionDiagnostics successful operation
     * @throws ApiError
     */
    public diagnosticsGet({
        subscriptionId,
        organization,
    }: {
        /**
         * The id of the notifications subscription.
         */
        subscriptionId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<SubscriptionDiagnostics> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/subscriptions/{subscriptionId}/diagnostics',
            path: {
                'subscriptionId': subscriptionId,
                'organization': organization,
            },
        });
    }
    /**
     * Update the diagnostics settings for a subscription.
     * @returns SubscriptionDiagnostics successful operation
     * @throws ApiError
     */
    public diagnosticsUpdate({
        body,
        subscriptionId,
        organization,
    }: {
        body: UpdateSubscripitonDiagnosticsParameters,
        /**
         * The id of the notifications subscription.
         */
        subscriptionId: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<SubscriptionDiagnostics> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/notification/subscriptions/{subscriptionId}/diagnostics',
            path: {
                'subscriptionId': subscriptionId,
                'organization': organization,
            },
            body: body,
        });
    }
}
