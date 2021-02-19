import $ from 'jquery';
export class MenuElement {
  constructor(title, url, image, text, part) {
    this.title = title;
    this.url = url;
    this.image = image;
    this.text = text;
    this.part = part;
  }
  createElement() {
    return `
    <div class="uk-width-1-5@xl uk-width-1-4@l uk-width-1-3@m uk-width-1-2@s   test item-li" data-value="${this.part}">
      <article class=" item-card  uk-card-hover" tabindex="-1">
            <div class="uk-width-auto test item-icon " >
              <img class="uk-comment-avatar"  src="${this.image}"  width="30" height="30" alt="${this.title}">
            </div>
            <div class="uk-width-expand">
                <b class="item-header">${this.title}</b>
              <p class="uk-comment-meta uk-margin-remove-top test item-pra">
                ${this.text}
              </p>
          </div>
      </article>
    </div>
    `;
  }
  addEvent() {
    const ele = $(this.createElement())
    ele.on("click", () => {
      window.open(this.url, '_blank');
    })
    return ele
  }
  appendElement() {
    const ele = this.addEvent()
    $('#menus').append(ele);
  }
}
