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
     * @returns SubscriptionDiagnostics successful operation
     * @throws ApiError
     */
    public diagnosticsGet({
        organization,
        subscriptionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        subscriptionId: string,
    }): CancelablePromise<SubscriptionDiagnostics> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/hooks/subscriptions/{subscriptionId}/diagnostics',
            path: {
                'organization': organization,
                'subscriptionId': subscriptionId,
            },
        });
    }
    /**
     * @returns SubscriptionDiagnostics successful operation
     * @throws ApiError
     */
    public diagnosticsUpdate({
        organization,
        body,
        subscriptionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: UpdateSubscripitonDiagnosticsParameters,
        subscriptionId: string,
    }): CancelablePromise<SubscriptionDiagnostics> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/hooks/subscriptions/{subscriptionId}/diagnostics',
            path: {
                'organization': organization,
                'subscriptionId': subscriptionId,
            },
            body: body,
        });
    }
}
