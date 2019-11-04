document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "yyyy-mm-dd"
    });
});

document.querySelectorAll('.modal-project-close').forEach((element) => {
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach((element) => {
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-show').forEach((element) => {
    element.onclick = showModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (event) {
        if (event.keyCode == 27) closeModal();
    }
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}

document.querySelector('#log-in .modal-project').onclick = function (event) {
    event.stopPropagation();
}

document.querySelector('#sign-up .modal-project').onclick = function (event) {
    event.stopPropagation();
}

document.querySelector('.read-rule').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '-355px';
}

document.querySelector('.read-rule-back').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '0';
}

document.querySelector('#agree-rules').onchange = function() {
    if (this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled')
    } else {
        document.querySelector('#signup-submit').classList.add('disabled')
    }
}

