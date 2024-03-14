document.addEventListener('DOMContentLoaded', function () {
    const roverRadios = document.querySelectorAll('input[name="rover"]');
    const dateInput = document.getElementById('date');
    const searchButton = document.getElementById('search-btn');
    const clearButton = document.getElementById('clear-btn');
    const errorMsg = document.getElementById('error-msg');
    const photoResults = document.getElementById('photo-results');

    let selectedRover = '';
    let selectedDate = '';

    roverRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            selectedRover = this.value;
        });
    });

    dateInput.addEventListener('change', function () {
        selectedDate = this.value;
    });

    searchButton.addEventListener('click', function () {
        if (!selectedRover) {
            errorMsg.textContent = 'Please select a rover.';
            return;
        }
        if (!selectedDate) {
            errorMsg.textContent = 'Please select a date.';
            return;
        }

        errorMsg.textContent = '';
        photoResults.innerHTML = '';

      
        const apiKey = 'wiremuOsBkMr3o2SNjqQAHCs0lgv6aUuYNpc2kGB';
        const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?earth_date=${selectedDate}&api_key=${apiKey}&page=1`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const photos = data.photos;
                if (photos.length === 0) {
                    errorMsg.textContent = 'No photos found for selected date.';
                    return;
                }
                photos.slice(0, 25).forEach((photo, index) => {
                    const img = document.createElement('img');
                    img.src = photo.img_src;
                    img.alt = `Photo ${index + 1}`;
                    img.title = photo.camera.full_name;
                    img.classList.add('thumbnail');
                    img.addEventListener('click', function () {
                  
                        window.open(photo.img_src, '_blank');
                    });
                    photoResults.appendChild(img);
                });
            })
            .catch(error => {
                errorMsg.textContent = 'An error occurred while fetching photos.';
                console.error('Error fetching photos:', error);
            });
    });

    clearButton.addEventListener('click', function () {
        errorMsg.textContent = '';
        photoResults.innerHTML = '';
    });
});
