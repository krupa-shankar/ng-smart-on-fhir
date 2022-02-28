import { ClientApp } from '../models/client-app';
/**
 * List of SMART on FHIR Client Applications defined in the SAMPLE APPLICATION
 */
export const CLIENT_APPS: ClientApp[] = [
    {
        name: 'Local - Sample Standalone and EHR Launch App',
        uniqueName: 'chbaseppe1',
        clientId: '6faa0fe6-8eb2-4217-8c4f-0910f7fed0b5',
        redirectUri: 'http://localhost:4200/redirect/chbaseppe1',
        launchUrl: 'http://localhost:4200/launch/chbaseppe1',
        scopes: 'patient/*.*',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'chbaseppe',
        secret: '5e24b756-9a70-4ea7-a602-150c639280a3'
    },
    {
        name: 'Adam - Logica',
        uniqueName: 'adam',
        clientId: 'a0d4ebd4-f817-4eac-92cc-09574ca86ef9',
        redirectUri: 'https://apbeilchick.github.io/smart-ng-fhir-app/redirect/adam',
        launchUrl: 'https://apbeilchick.github.io/smart-ng-fhir-app/launch/adam',
        scopes: 'launch/patient,offline_access,openid,patient/*.*,profile,fhirUser',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'logica',
        dashboardDefaultLaunch: 'tdata'
    },
    {
        name: 'Shaun - Logica',
        uniqueName: 'shaun',
        clientId: 'fa0f6b3b-d2a5-4cdf-9e58-0c82250f5280',
        redirectUri: 'https://apbeilchick.github.io/smart-ng-fhir-app/redirect/shaun',
        launchUrl: 'https://apbeilchick.github.io/smart-ng-fhir-app/launch/shaun',
        scopes: 'launch/patient,offline_access,openid,patient/*.*,profile,fhirUser',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'logica',
        dashboardDefaultLaunch: 'pou'
    },
    {
        name: 'Krupa - Logica',
        uniqueName: 'krupa',
        clientId: '6aa51731-d860-4ce1-9db8-f3fe9aebf849',
        redirectUri: 'https://krupa-shankar.github.io/ng-smart-on-fhir/redirect/krupa',
        launchUrl: 'https://krupa-shankar.github.io/ng-smart-on-fhir/launch/krupa',
        scopes: 'launch/patient,offline_access,openid,patient/*.*,profile,fhirUser',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'logica',
        dashboardDefaultLaunch: 'pou'
    },
    {
        name: 'Space Delimited Scope - Logica',
        uniqueName: 'scopes',
        clientId: '99678114-64b9-4803-a5f7-024090705bfb',
        redirectUri: 'https://apbeilchick.github.io/smart-ng-fhir-app/redirect/scopes',
        launchUrl: 'https://apbeilchick.github.io/smart-ng-fhir-app/launch/scopes',
        scopes: 'launch/patient fhirUser openid patient/*.* offline_access',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'logica'
    }
];
