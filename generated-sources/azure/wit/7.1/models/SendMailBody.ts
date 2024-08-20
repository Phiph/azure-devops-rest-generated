/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MailMessage } from './MailMessage';
export type SendMailBody = {
    fields?: Array<string>;
    ids?: Array<number>;
    message?: MailMessage;
    persistenceId?: string;
    projectId?: string;
    sortFields?: Array<string>;
    tempQueryId?: string;
    wiql?: string;
};

