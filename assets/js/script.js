var menu = document.getElementsByClassName('menu')[0];
const focusableInputElements = document.querySelectorAll(`.menu-list-item`);
const focusable = [...focusableInputElements];
const index = focusable.indexOf(document.activeElement);
focusableInputElements[2].focus();
document.addEventListener('keydown', function (e) {
    if (!menu.classList.contains('active')) {
        handleLinkFocus(e);

    }
    else {
        handleMenuFocus(e);
    }
});

function handleLinkFocus(e) {
    const focusableInputElements = document.querySelectorAll(`.box`);
    const focusable = [...focusableInputElements];
    const index = focusable.indexOf(document.activeElement);
    let nextIndex = 0;
    if (e.keyCode === 37) {
        // left arrow
        e.preventDefault();
        nextIndex = index > 0 ? index - 1 : 0;
        focusableInputElements[nextIndex].focus();
        for (let i = 0; i < focusable.length; i++) {
            const element = focusable[i];
            element.classList.remove('active');
        }
        focusableInputElements[nextIndex].classList.add('active');
        if (index == 0 && e.keyCode === 37) {
            menu.classList.add('active');
            focusableInputElements[nextIndex].classList.remove('active');
            focusableInputElements[nextIndex].blur();
        }
    }
    else if (e.keyCode === 39) {
        // right arrow
        e.preventDefault();
        nextIndex = index + 1 < focusable.length ? index + 1 : index;
        for (let i = 0; i < focusable.length; i++) {
            const element = focusable[i];
            element.classList.remove('active');
        }
        focusableInputElements[nextIndex].classList.add('active');
        focusableInputElements[nextIndex].focus();
    }
    else if (e.keyCode === 38) {
        // up arrow
        e.preventDefault();
        if (index > 4 && index < 10) {
            nextIndex = index - 5;
            for (let i = 0; i < focusable.length; i++) {
                const element = focusable[i];
                element.classList.remove('active');
            }
            focusableInputElements[nextIndex].classList.add('active');
            focusableInputElements[nextIndex].focus();
        }
    }
    else if (e.keyCode === 40) {
        // down arrow
        e.preventDefault();
        if (index > -1 && index < 5) {
            nextIndex = index + 5;
            for (let i = 0; i < focusable.length; i++) {
                const element = focusable[i];
                element.classList.remove('active');
            }
            focusableInputElements[nextIndex].classList.add('active');
            focusableInputElements[nextIndex].focus();
        }
    }
    else if (e.keyCode === 13) {
        // enter
        e.preventDefault();
        const details = document.querySelectorAll(`.detail`);

        var content = document.getElementsByClassName('content')[0];
        content.style.backgroundImage = `url('/assets/img/${index}.jpg')`;
        content.style.backgroundColor = 'black';
        content.scrollTop = 0;

        var contentRow = document.querySelector(".content > .content-row:nth-child(1)");
        contentRow.style.marginTop = 215 + 'px';
    }
}

function handleMenuFocus(e) {
    const focusableInputElements = document.querySelectorAll(`.menu-list-item`);
    const focusable = [...focusableInputElements];
    const index = focusable.indexOf(document.activeElement);
    let nextIndex = 0;
    focusableInputElements[2].focus();
    if (e.keyCode === 38) {
        // up arrow
        e.preventDefault();
        for (let i = 0; i < focusable.length; i++) {
            const element = focusable[i];
            element.classList.remove('active');
        }
        nextIndex = index > 0 ? index - 1 : 0;
        focusableInputElements[nextIndex].classList.add('active');
        focusableInputElements[nextIndex].focus();
    }
    else if (e.keyCode === 40) {
        // down arrow
        e.preventDefault();
        for (let i = 0; i < focusable.length; i++) {
            const element = focusable[i];
            element.classList.remove('active');
        }
        nextIndex = index + 1 < focusable.length ? index + 1 : index;
        focusableInputElements[nextIndex].classList.add('active');
        focusableInputElements[nextIndex].focus();
    }
    else if (e.keyCode === 39) {
        // right arrow  
        e.preventDefault();
        menu.classList.remove('active');
        const fie = document.querySelectorAll(`.box`);
        fie[0].classList.add('active');
        fie[0].focus();
    }

}