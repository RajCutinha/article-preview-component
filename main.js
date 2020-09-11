const shareBtn = document.getElementById('share');

shareBtn.addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('on');
  document.querySelector('.mobile-share').classList.toggle('on');  
  document.querySelector('.author').classList.toggle('on');   
  document.querySelector('.article-component').classList.toggle('on');   
})

