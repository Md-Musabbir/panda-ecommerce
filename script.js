const tags = document.getElementsByTagName('h2');

for ( tag of tags) {
    tag.style.color = 'lightblue '
}
// console.log(document.getElementsByClassName('card'))

document.getElementById('backpack').style.background = 'tomato '
const cards = document.getElementsByClassName('card');
for (card of cards) {
    card.style.borderRadius = "30px";
}

document.getElementById('submit').addEventListener('click', function () {
    console.log('submite is clicked')
    // document.body.style.background = 'black'
});

const buyNowBtn = document.getElementsByClassName('card-footer')


for (i = 0;i < buyNowBtn.length; i++) {

    console.log(buyNowBtn)
    buyNowBtn[i].style.backgroundColor = "red !important";
    

}












































































