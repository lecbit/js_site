function render()
{
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

let CATALOG = [];



fetch('https://raw.githubusercontent.com/lecbit/js_site/master/server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error =>
    {
        console.log(error);
    });