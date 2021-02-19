import {  myjson as list_items  } from './js/item_menus_qieye';
// import "./js/listenPage"
import { MenuElement } from "./js/class/MenuElement";
import { PartTitle } from "./js/class/partElement";
import "./sass/main.scss"

let partTitles = list_items.map(cur => {
  console.log(cur)
  return {partTitle:cur.part}
})
console.log(partTitles)
let menus_items = []
list_items.map(cur => {
  let items = cur.items
  items.map(innercur => {
    innercur.part = cur.part
    menus_items.push(innercur)
  })
})
menus_items.map(cur => {
  const {title, url, image, text, part} = cur
  const element = new MenuElement(title, url, image, text, part)
  element.appendElement()
})
partTitles.map(cur => {
  const {partTitle} = cur
  const element = new PartTitle(partTitle)
  element.appendElement()
})

