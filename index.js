document.addEventListener('DOMContentLoaded', () => {

    // --- Car Data ---
    // In a real application, this data would come from a database/API.
    const carsData = [
        {
            name: "Maruti Suzuki Swift",
            price: "₹ 6,20,000",
            type: "For Sale",
            imageUrl: "https://tse3.mm.bing.net/th/id/OIP.3FqXNpVRsDPEC76xExoVWAHaE6?pid=Api&P=0&h=180",
            alt: "Red Maruti Suzuki Swift"
        },
        {
            name: "Toyota Innova Crysta",
            price: "₹ 1,500/day",
            type: "For Rent",
            imageUrl: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unrivaled-upgrades-banner1600x1000.jpg",
            alt: "White Toyota Innova"
        },
        {
            name: "Hyundai Creta",
            price: "₹ 11,50,000",
            type: "For Sale",
            imageUrl: "https://www.rushlane.com/wp-content/uploads/2020/03/hyundai-creta-2020-launch-price-details-10.jpg",
            alt: "Black Hyundai Creta"
        },
        {
            name: "Mahindra Thar",
            price: "₹ 2,500/day",
            type: "For Rent",
            imageUrl: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Thar-110120211721.jpg",
            alt: "Red Mahindra Thar"
        }
    ];

    const carGrid = document.getElementById('carGrid');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    // --- Function to Display Cars ---
    const displayCars = (cars) => {
        carGrid.innerHTML = ''; // Clear existing cars

        cars.forEach(car => {
            const carCardHTML = `
                <div class="car-card">
                    <img src="${car.imageUrl}" alt="${car.alt}">
                    <div class="car-card-content">
                        <h3>${car.name}</h3>
                        <p>${car.price} | ${car.type}</p>
                        <button class="details-btn" data-car-name="${car.name}">View Details</button>
                    </div>
                </div>
            `;
            carGrid.innerHTML += carCardHTML;
        });
    };

    // --- Initial Display ---
    displayCars(carsData);

    // --- Event Listeners ---
    
    // Search functionality (simple filter)
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            alert(`Searching for: "${searchTerm}"`);
            // You can add filtering logic here:
            // const filteredCars = carsData.filter(car => car.name.toLowerCase().includes(searchTerm));
            // displayCars(filteredCars);
        }
    });
    
    // Event delegation for "View Details" buttons
    carGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('details-btn')) {
            const carName = e.target.getAttribute('data-car-name');
            alert(`Showing details for the ${carName}.`);
            // Here you would typically redirect to a details page or open a modal.
        }
    });

});