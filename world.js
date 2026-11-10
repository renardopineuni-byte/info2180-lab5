window.addEventListener('load', () => {
  const input = document.getElementById('country');
  const result = document.getElementById('result');

  function search(lookup) {
    const params = new URLSearchParams({ country: input.value.trim() });
    if (lookup === 'cities') {
      params.set('lookup', 'cities');
    }

    fetch('world.php?' + params.toString())
      .then(response => response.text())
      .then(html => { result.innerHTML = html; })
      .catch(() => { result.textContent = 'The lookup failed. Is Apache running?'; });
  }

  document.getElementById('lookup')
    .addEventListener('click', () => search('country'));

  document.getElementById('lookup-cities')
    .addEventListener('click', () => search('cities'));
});