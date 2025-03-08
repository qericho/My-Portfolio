export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            opacity: 0, // Added opacity 0 for fade-in effect
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            opacity: 1, // Full visibility
            y: 0,
            x: 0,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        }
    };
};
