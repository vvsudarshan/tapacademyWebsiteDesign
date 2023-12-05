document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter-numbers');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.dataset.count; // Use dataset.count to get the value of data-count
            const count = +counter.innerText;

            const inc = target / 50; // Adjust the speed of counting

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        // Trigger the updateCount function for each counter individually
        updateCount();
    });
});
