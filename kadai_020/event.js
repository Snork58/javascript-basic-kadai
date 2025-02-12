const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const targetText = document.getElementById('text');
  
  targetText.innerText= 'ボタンをクリックしました';
});