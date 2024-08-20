/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SendMailBody } from '../models/SendMailBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SendMailService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * RESTful method to send mail for selected/queried work items.
     * @returns any successful operation
     * @throws ApiError
     */
    public sendMailSendMail({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: SendMailBody,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/sendmail',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
