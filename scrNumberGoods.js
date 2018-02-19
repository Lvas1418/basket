let i = numberOfGoods = prompt('Введите количество товаров','');

if (i>=1)
{
    i %= 10;
    let decline;
    if (i==1)
        decline="товар";
    if (i>1 & i<5)
        decline="товара";
    if (i==0 || i>=5)
        decline="товаров";
    confirm("Вы выбрали " + numberOfGoods + " " + decline +'?');
}
else { confirm("Вы не выбрали ни одного товара?");}

