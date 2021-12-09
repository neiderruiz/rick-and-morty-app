export const moveDownScreen = () => {
    window.scrollTo({
        top: window.screen.height,
        behavior: 'smooth'
    });
}

export const moveUpScreen = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}