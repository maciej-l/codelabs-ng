import { DashboardNavigation } from 'src/app/shared/models/dashboard-navigation';

export const dashboardNavigation: DashboardNavigation[] = [
    {
        title: 'Albumy',
        icon: 'album',
        activeClass: 'is-active',
        isDisabled: false,
        path: 'albums-list'
    }
];
