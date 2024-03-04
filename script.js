// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://media.licdn.com/dms/image/D5603AQEQod-k2_EWqw/profile-displayphoto-shrink_400_400/0/1708677478191?e=1715212800&v=beta&t=mDJwwks10x1pZ_Tv512ycyAvf8VIIO4iImRBetdnnww',
  'https://media.licdn.com/dms/image/D5603AQFrMzwZ8m8cYg/profile-displayphoto-shrink_400_400/0/1705250754193?e=1715212800&v=beta&t=UlNDZ06jynZJOZlK2YJUI1PyEdo3xmv_FcoMvNjwDdU',
  'https://media.licdn.com/dms/image/D4D03AQGiHUt6eV6s8A/profile-displayphoto-shrink_400_400/0/1701539562279?e=1715212800&v=beta&t=XKiP0iDYawT9UBiP9ECbN4LrcFKexOUVXHWb26yk66M',
  'https://media.istockphoto.com/id/1141424330/photo/young-man-doing-a-video-conferencing-using-his-laptop.webp?s=2048x2048&w=is&k=20&c=y7m1GG4w1a2OQD_Qm49bscW5WHHsv6a3DuX-dMwil10=',
  'https://media.istockphoto.com/id/1262283573/photo/happy-young-indian-teen-girl-woman-wearing-headphones-looking-at-camera-studying-listening.webp?s=2048x2048&w=is&k=20&c=4nHUJWegg3wqiQB9h_SSjvGjeXx5BT45HGAGiUGDYn0='
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

