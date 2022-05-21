"use strict";
window.onload = function(){
	let accordion = new Accordion(["General", "Title", "Legend", "Axis X", "Axis Y", "Plot area"]);
	accordion.accordionInit();
	let accordion2 = new Accordion(["General", "Title", "Legend", "Axis X", "Axis Y", "Plot area"],  {
		container: 'accordion2'
	});
	accordion2.accordionInit();
}
class Accordion{
	constructor(arr = ["Title_1", "Title_2", "Title_3", "Title_4", "Title_5", "Title_6"], options){
		this.arr = arr;
		let defaultOptions = {
			container: 'accordion',
			item: 'accordion-item',
			accordionTitle: 'accordion-item-title',
			accordionContent: 'accordion-item-content',
			titleShow: 'title-show',
			contentShow: 'content-show'
		}
		for(let option in defaultOptions) {
			this[option] = (options && options[option] !== undefined) ? options[option] : defaultOptions[option];
		}
	}
	accordionInit(){
		this.drawAccordionElements(this.arr, this.options);
		this.accordionShow(this.options);
	}
}
Accordion.prototype.drawAccordionElements = function(arr, options){
	let container = document.querySelector('.'+this.container);
	let accordionItem = document.createElement('div');
	accordionItem.classList.add(this.item);
	let accordionItemTitle = document.createElement('div');
	accordionItemTitle.classList.add(this.accordionTitle);
	let accordionItemContent = document.createElement('div');
	accordionItemContent.classList.add(this.accordionContent);
	let documentFragment = document.createDocumentFragment();
	documentFragment.appendChild(accordionItem);
	accordionItem.appendChild(accordionItemTitle);
	accordionItem.appendChild(accordionItemContent);
	for(let i = 0; i < arr.length; i++){
		accordionItemTitle.innerHTML = arr[i];
		container.appendChild(documentFragment.cloneNode(true));
	}
}
Accordion.prototype.accordionShow = function(options){
	let itemTitle = document.querySelectorAll('.'+this.container+' .'+this.accordionTitle);
	let itemContent = document.querySelectorAll('.'+this.container+' .'+this.accordionContent);
	let active;
	let _this = this;
	itemTitle.forEach(function(item){
		item.addEventListener('click', function(){
			this.classList.add(_this.titleShow);
			this.nextElementSibling.classList.add(_this.contentShow);
			if(active){
				active.classList.remove(_this.titleShow);
     			active.nextElementSibling.classList.remove(_this.contentShow);
			}
			active = (active === this) ? 0 : this;
		});
	});
}