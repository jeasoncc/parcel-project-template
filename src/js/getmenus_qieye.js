const puppeteer = require("puppeteer");

const fs = require("fs");
const pageUrl = "https://www.qieye.com/";
(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    // args: ['--start-maximized'],
  });
  const page = await browser.newPage();
  await page.goto(pageUrl);

  const item_json = await page.$$eval(".part", (nodes) =>
    nodes.map((cur) => {
      const part = cur.querySelector("h2").innerText;
      const eleitems = cur.querySelectorAll(".item");
      const items = Array.from(eleitems).map((cur) => {
        const href = cur.querySelector("a").href;
        const title = cur.querySelector("h3").innerText;
        const text = cur.querySelector("p").innerText;
        const img = "https://www.qieye.com/" +cur.querySelector("img").src;
        return {
          href,
          text,
          title,
          img
        };
      });
      return {
        part,
        items,
      };
    })
  );
  //   const data = new Uint8Array(Buffer.from(item_json));
  const out_json = `export const myjson =  ${JSON.stringify(item_json)}`;
  fs.writeFile("item_menus_qieye.js", out_json, (err) => {
    if (err) throw err;
    console.log("文件已被保存");
  });
  // await page.waitFor(10000);
  //   await browser.close();
})();
