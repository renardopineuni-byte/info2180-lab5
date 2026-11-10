window.addEventListener('load', () => {
  const lookup = document.getElementById('lookup');
  const result = document.getElementById('result');
  const input = document.getElementById('country');

  lookup.addEventListener('click', () => {
    fetch('world.php?country=' + encodeURIComponent(input.value))
      .then(response => response.text())
      .then(data => { result.innerHTML = data; });
  });
});