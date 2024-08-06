// fade
export const fadeIn: PropertyIndexedKeyframes = {
  opacity: [0, 1]
};

export const fadeOut: PropertyIndexedKeyframes = {
  opacity: [1, 0]
};

export const fadeInDown: Keyframe[] = [
  { opacity: 0, transform: 'translateY(-100%)' },
  { opacity: 1, transform: 'translateY(0)' }
];

export const fadeInUp: Keyframe[] = [
  { opacity: 0, transform: 'translateY(100%)' },
  { opacity: 1, transform: 'translateY(0)' }
];

export const fadeInLeft: Keyframe[] = [
  { opacity: 0, transform: 'translateX(-100%)' },
  { opacity: 1, transform: 'translateX(0)' }
];

export const fadeInRight: Keyframe[] = [
  { opacity: 0, transform: 'translateX(100%)' },
  { opacity: 1, transform: 'translateX(0)' }
];

export const fadeOutDown: Keyframe[] = [
  { opacity: 1, transform: 'translateY(0)' },
  { opacity: 0, transform: 'translateY(100%)' }
];
export const fadeOutUp: Keyframe[] = [
  { opacity: 1, transform: 'translateY(0)' },
  { opacity: 0, transform: 'translateY(-100%)' }
];

export const fadeOutLeft: Keyframe[] = [
  { opacity: 1, transform: 'translateX(0)' },
  { opacity: 0, transform: 'translateX(-100%)' }
];

export const fadeOutRight: Keyframe[] = [
  { opacity: 1, transform: 'translateX(0)' },
  { opacity: 0, transform: 'translateX(100%)' }
];

// slides
export const slideInLeft: PropertyIndexedKeyframes = { transform: ['translateX(-100%)', 'translateX(0)'] };
export const slideInRight: PropertyIndexedKeyframes = { transform: ['translateX(100%)', 'translateX(0)'] };
export const slideInUp: PropertyIndexedKeyframes = { transform: ['translateY(100%)', 'translateY(0)'] };
export const slideInDown: PropertyIndexedKeyframes = { transform: ['translateY(-100%)', 'translateY(0)'] };
export const slideOutLeft: PropertyIndexedKeyframes = { transform: ['translateX(0)', 'translateX(-100%)'] };
export const slideOutRight: PropertyIndexedKeyframes = { transform: ['translateX(0)', 'translateX(100%)'] };
export const slideOutUp: PropertyIndexedKeyframes = { transform: ['translateY(0)', 'translateY(-100%)'] };
export const slideOutDown: PropertyIndexedKeyframes = { transform: ['translateY(0)', 'translateY(100%)'] };

// zoom
export const zoomIn: PropertyIndexedKeyframes = { transform: ['scale(0)', 'scale(1)'] };
export const zoomOut: PropertyIndexedKeyframes = { transform: ['scale(1)', 'scale(0)'] };

// flip
export const flipX: PropertyIndexedKeyframes = { transform: ['rotateX(0deg)', 'rotateX(180deg)'] };
export const flipY: PropertyIndexedKeyframes = { transform: ['rotateY(0deg)', 'rotateY(180deg)'] };
export const flipXTop: PropertyIndexedKeyframes = {
  transform: ['rotateX(0deg)', 'rotateX(180deg)'],
  transformOrigin: 'top'
};
export const flipXBottom: PropertyIndexedKeyframes = {
  transform: ['rotateX(0deg)', 'rotateX(180deg)'],
  transformOrigin: 'bottom'
};
export const flipYLeft: PropertyIndexedKeyframes = {
  transform: ['rotateY(0deg)', 'rotateY(180deg)'],
  transformOrigin: 'left'
};
export const flipYRight: PropertyIndexedKeyframes = {
  transform: ['rotateY(0deg)', 'rotateY(180deg)'],
  transformOrigin: 'right'
};

export const flash: PropertyIndexedKeyframes = {
  opacity: [1, 0, 1, 0, 1],
  offset: [0, 0.25, 0.5, 0.75, 1]
};
export const pulse: PropertyIndexedKeyframes = { transform: ['scale(1)', 'scale(1.1)', 'scale(1)'] };
export const heartBeat: PropertyIndexedKeyframes = {
  transform: ['scale(1)', 'scale(1.2)', 'scale(1)', 'scale(1.2)', 'scale(1)'],
  offset: [0, 0.14, 0.28, 0.48, 0.8]
};
export const breath: PropertyIndexedKeyframes = { opacity: [1, 0.3, 1] };
export const swing: PropertyIndexedKeyframes = {
  transform: ['rotate(0)', 'rotate(12deg)', 'rotate(-8deg)', 'rotate(5deg)', 'rotate(-5deg)', 'rotate(0)'],
  offset: [0, 0.2, 0.4, 0.6, 0.8]
};
export const shakeX: PropertyIndexedKeyframes = {
  transform: [
    'translateX(0)',
    'translateX(-10px)',
    'translateX(10px)',
    'translateX(-10px)',
    'translateX(10px)',
    'translateX(-10px)',
    'translateX(10px)',
    'translateX(-10px)',
    'translateX(10px)',
    'translateX(-10px)',
    'translateX(0)'
  ],
  offset: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
};
export const shakeY: PropertyIndexedKeyframes = {
  transform: [
    'translateY(0)',
    'translateY(-8px)',
    'translateY(8px)',
    'translateY(-8px)',
    'translateY(8px)',
    'translateY(-8px)',
    'translateY(8px)',
    'translateY(-8px)',
    'translateY(8px)',
    'translateY(-8px)',
    'translateY(0)'
  ],
  offset: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
};
