function clearForm() {
    document.getElementById("date").value = "";
    document.getElementById("gst_number").value = "";
    document.getElementById("invoice_number").value = "";
    document.getElementById("name").value = "";
    document.getElementById("add1").value = "";
    document.getElementById("add2").value = "";
    document.getElementById("country-select").value = "";
    document.getElementById("state-select").innerHTML = "<option value=''>State</option>";
    document.getElementById("city-select").innerHTML = "<option value=''>City</option>";
    document.getElementById("pincode").value = "";
    document.getElementById("std").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("alternate").value = "";
}

function saveForm() {
    // Implement form save logic here
    alert("Form saved!");
}

function addItem() {
    const table = document.querySelector("table");
    const newRow = table.insertRow();
    
    const slNoCell = newRow.insertCell(0);
    const descriptionCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);
    const hsnCell = newRow.insertCell(3);
    const gstCell = newRow.insertCell(4);
    const amountCell = newRow.insertCell(5);

    slNoCell.innerHTML = '<input type="number" id="serial" name="serial no">';
    descriptionCell.innerHTML = '<input type="text" id="description" name="description">';
    quantityCell.innerHTML = '<input type="number" id="quantity" name="quantity">';
    hsnCell.innerHTML = '<input type="text" id="HSN" name="HSN">';
    gstCell.innerHTML = '<input type="number" id="gst" name="gst">';
    amountCell.innerHTML = '<input type="number" id="amount" name="amount">';
}

function populateStates() {
    const country = document.getElementById("country-select").value;
    const stateSelect = document.getElementById("state-select");
    stateSelect.innerHTML = "<option value=''>State</option>"; // Reset state options

    const states = {
        "US": ["California", "Texas", "New York"],
        "UK": ["England", "Scotland", "Wales"],
        "CA": ["Ontario", "Quebec", "British Columbia"],
        "AU": ["New South Wales", "Victoria", "Queensland"],
        "IN": ["West Bengal", "Maharashtra", "Karnataka"]
    };

    if (country in states) {
        states[country].forEach(state => {
            const option = document.createElement("option");
            option.value = state;
            option.text = state;
            stateSelect.add(option);
        });
    }
}

function populateCities() {
    const state = document.getElementById("state-select").value;
    const citySelect = document.getElementById("city-select");
    citySelect.innerHTML = "<option value=''>City</option>"; // Reset city options

    const cities = {
        "California": ["Los Angeles", "San Francisco", "San Diego"],
        "Texas": ["Houston", "Dallas", "Austin"],
        "New York": ["New York City", "Buffalo", "Rochester"],
        "England": ["London", "Manchester", "Birmingham"],
        "Scotland": ["Edinburgh", "Glasgow", "Aberdeen"],
        "Wales": ["Cardiff", "Swansea", "Newport"],
        "Ontario": ["Toronto", "Ottawa", "Mississauga"],
        "Quebec": ["Montreal", "Quebec City", "Laval"],
        "British Columbia": ["Vancouver", "Victoria", "Surrey"],
        "New South Wales": ["Sydney", "Newcastle", "Wollongong"],
        "Victoria": ["Melbourne", "Geelong", "Ballarat"],
        "Queensland": ["Brisbane", "Gold Coast", "Cairns"],
        "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Karnataka": ["Bangalore", "Mysore", "Mangalore"]
    };

    if (state in cities) {
        cities[state].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.text = city;
            citySelect.add(option);
        });
    }
}
