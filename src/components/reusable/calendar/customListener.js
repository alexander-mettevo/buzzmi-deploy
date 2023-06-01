const createCustomClickEvent = (selector) => {
    const el = document.querySelector(selector);
    if(!el) {
        return;
    }
    el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    el.removeAttribute("disabled");
    el.dispatchEvent(new Event("click"));
}

export const triggerClickOnPrev = () => {
    createCustomClickEvent(".react-calendar__navigation__prev-button")
}

export const triggerClickOnNext = () => {
    createCustomClickEvent(".react-calendar__navigation__next-button")
}