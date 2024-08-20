/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateProfileContext = {
    ciData?: Record<string, any>;
    contactWithOffers?: boolean;
    countryName?: string;
    displayName?: string;
    emailAddress?: string;
    hasAccount?: boolean;
    language?: string;
    phoneNumber?: string;
    /**
     * The current state of the profile.
     */
    profileState?: 'custom' | 'customReadOnly' | 'readOnly';
};

