
const data = [
    {
        "id": 1,
        "make": "Toyota",
        "model": "Corolla",
        "year": 2022,
        "color": "Silver",
        "mileage": 20000,
        "price": 25000,
        "fuelType": "Gasoline",
        "transmission": "Automatic",
        "engine": "2.0L 4-cylinder",
        "horsepower": 169,
        "features": [
            "Bluetooth",
            "Backup Camera",
            "Keyless Entry"
        ],
        "owners": 1,
        "image": "https://fakeimg.pl/500x500/cccccc"
    }
]

function Listing({ data }) {
    return (
        <div>
            <h1>Listing</h1>
            <ul>
                {data.map((auto, index) =>
                    <li key={index}>
                        <b>Marke:</b> {auto.make},
                        <b>Modell:</b> {auto.model},
                        <b>Baujahr:</b> {auto.year},
                        <b>Features:</b> {auto.features.join(", ")}
                    </li>)}
            </ul>
        </div>
    )
}

export default Listing