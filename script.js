document.getElementById('red').addEventListener('click', function()
{
    document.querySelector('#image').src='photo/red-car.jfif';
});
document.getElementById('blue').addEventListener('click', function()
{
    document.querySelector('#image').src='photo/blue-car.jpg';
});
document.getElementById('grey').addEventListener('click', function()
{
    document.querySelector('#image').src='photo/grey-car.jfif';
});
document.getElementById('addtocartbutton').addEventListener('click', function()
{
    document.querySelector('#addtocartbutton h4').innerHTML = "Your item is added to cart";
});