import { animate, animation, group, query, style } from '@angular/animations';

const TRANSITION_STYLES = {
    position: 'fixed',
    top: 0,
    width: 'calc(100% - 8vmin)'
};

export const slideAnimation = animation([
    group([
        query(':enter', [
            style({ transform: '{{ enterTransform }}', ...TRANSITION_STYLES }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', ...TRANSITION_STYLES }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)', ...TRANSITION_STYLES }),
            animate('0.5s ease-in-out', style({ transform: '{{ leaveTransform }}', ...TRANSITION_STYLES }))
        ], { optional: true })
    ])
]);
