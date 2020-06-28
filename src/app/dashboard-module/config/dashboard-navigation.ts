import { DashboardNavigation } from 'src/app/shared/models/dashboard-navigation';

export const dashboardNavigation: DashboardNavigation[] = [
    {
        title: 'Albumy',
        icon: '../../../assets/images/song.svg',
        activeClass: 'is-active',
        isDisabled: false,
        path: 'albums-list'
    }
];
