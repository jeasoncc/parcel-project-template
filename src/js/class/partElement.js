import $ from 'jquery';
export class PartTitle {
  constructor(partTitle) {
    this.partTitle = partTitle;
  }
  createElement() {
    return `
    <li class="" >
      <a href="#" class="uk-button uk-button-text">${this.partTitle}</a>
    </li>
    `;
  }
  addEvent() {
    const ele = $(this.createElement())
    ele.on("click", (e) => {
      const arryEle = $(".item-li")
      arryEle.map(index => {
        $(arryEle[index]).css("display", "none")
        if($(arryEle[index]).attr("data-value") == ele.text().trim()) {
          $(arryEle[index]).css("display", "block")
        }
      })
    })
    return ele
  }
  appendElement() {
    const ele = this.addEvent()
    $('#parts').append(ele);
  }
}
