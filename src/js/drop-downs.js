export function openDropDown(event) {
const parentElement = this.closest('.filters-wrap');
const svgElement = parentElement.querySelector('.filters-down-svg');
const list = parentElement.querySelector('ul');

    if (list.classList.contains('list-active')) {
        list.classList.remove('list-active');
    } else {
        list.classList.add('list-active');
    }
   if (svgElement.classList.contains('rotate')) {
    svgElement.classList.remove('rotate');
   } else {
    svgElement.classList.add('rotate');
   }
}

export function rotateButton(event) {
    if (this.classList.contains('rotate')) {
        this.classList.remove('rotate');
    } else {
        this.classList.add('rotate');
    }
   if (this.previousElementSibling.classList.contains('list-active')) {
    this.previousElementSibling.classList.remove('list-active');
   } else {
    this.previousElementSibling.classList.add('list-active');
   }
}