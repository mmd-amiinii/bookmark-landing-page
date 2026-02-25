// after:content-[''] after:absolute after:w-[100px] lg:after:w-full after:h-[4px] after:bg-[#fa5757] after:-bottom-[-1px] after:-left-[100px] after:opacity-0 transition-[left] after:duration-300 after:ease-in lg:after:bottom-[-8px] hover:after:left-[50%] hover:after:translate-x-[-50%] hover:after:opacity-100 hover:after:bottom-[-1px] lg:hover:after:bottom-[-8px]
const $ = document;

function selectElementByClass(elem_class) {
    return $.querySelector(elem_class)
}

function selectAllElementsByClass(elems_class) {
    return $.querySelectorAll(elems_class);
}

// Dom Elements
const open_mobile_menu = selectElementByClass('.open');
const close_mobile_menu = selectElementByClass('.close');
const mobile_menu_container = selectElementByClass('.mobile-menu-container');
const bookmark_text = selectElementByClass('.bookmark-text');
const feature_modes = selectAllElementsByClass('.feature-mode')
const feature_modes_images = selectAllElementsByClass('.feature-modes-img')
const all_questions = selectAllElementsByClass('.question-down-arrow');
const email_input = selectElementByClass('.email-input');
const contact_btn = selectElementByClass('.contact-btn');
const email_error_container = selectElementByClass('.email-error-container');
const email_container = selectElementByClass('.email-container');

// open mobile menu
open_mobile_menu.addEventListener('click', ()=> {
    mobile_menu_container.classList.remove('hidden');
    close_mobile_menu.classList.remove('hidden');
    open_mobile_menu.classList.add('hidden');
    bookmark_text.classList.add('fill-[#fff]');
})

// close mobile menu
close_mobile_menu.addEventListener('click', ()=> {
    mobile_menu_container.classList.add('hidden');
    close_mobile_menu.classList.add('hidden');
    open_mobile_menu.classList.remove('hidden');
    bookmark_text.classList.remove('fill-[#fff]');
    
})

// change features modes
feature_modes.forEach((mode, index) => {
    mode.addEventListener('click', ()=> {
        feature_modes.forEach(other_mode => {
            other_mode.classList.remove('after:left-[50%]', 'after:translate-x-[-50%]', 'after:opacity-100', 'text-black');
            other_mode.classList.add('after:opacity-0', 'text-black/50')
        })
        mode.classList.add('after:left-[50%]', 'after:translate-x-[-50%]', 'after:opacity-100', 'text-black');
        feature_modes_images.forEach(img => {
            img.classList.add('hidden')
        })
        feature_modes_images[index].classList.remove('hidden');
    })
})


// open answer of the questions 
all_questions.forEach(question => {
    question.addEventListener('click', ()=> {
        // all_questions.forEach(other_questions => {
        //     other_questions.classList.remove('rotate-180');
        //     other_questions.parentElement.nextElementSibling.classList.remove('max-h-[200px]', 'mt-5');
        // })
        question.classList.toggle('rotate-180');
        question.parentElement.nextElementSibling.classList.toggle('max-h-[300px]')
        question.parentElement.nextElementSibling.classList.toggle('mt-5')
    })
})

// email validation
contact_btn.addEventListener('click', ()=> {
    if((!email_validation(email_input.value))) {
        email_error_container.classList.remove('hidden');
        email_container.classList.add('bg-[#fa5757]')
    }
    else {
        email_error_container.classList.add('hidden');
        email_container.classList.remove('bg-[#fa5757]')
    }
})

email_input.addEventListener('keydown', (envet)=> {
    if(event.key == 'Enter') contact_btn.click();
    
})


function email_validation(email) {
    return (email.endsWith("@gmail.com") && email.length > 10) ? true : false;
}