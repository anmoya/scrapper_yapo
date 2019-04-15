const puppeteer = require("puppeteer");

(async () => {
    try {
        const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "https://www.yapo.cl/";
  await page.goto(url);
  //await page.screenshot({ path: 'example.png'});
  const urls = await page.evaluate(
    () => Array.from(document.querySelectorAll(".region-list li a")).map( nodo => nodo["href"])
  );

  let rm = urls[0];
  await page.goto(rm);
  const adds = await page.evaluate(
      () => document.querySelectorAll(".add span")
  );

  console.log(adds);


  await browser.close();
    } catch (err) {
        console.log(err);
    }
  
})();
