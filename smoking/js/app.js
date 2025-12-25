 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
let box = document.querySelector('.box');

axios.get('https://test-12b9d-default-rtdb.europe-west1.firebasedatabase.app/.json')
.then(res => {
  console.log(res.data);

  let cound = {
    img: '../img/comir.png',
    id: '0',
    name: 'L-набор Classic'
  };

  return axios.post(
    'https://test-12b9d-default-rtdb.europe-west1.firebasedatabase.app/.json',
    cound
  );
});
