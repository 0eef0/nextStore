
const productJSON = [
    {
        "id": 1,
        "name": "Salmon Onigiri",
        "price": 130,
        "desc": "A snack that recovers 50 HP.",
        "image": "https://static.wikia.nocookie.net/yakuza/images/d/d9/SalOni.jpg/revision/latest?cb=20190516081059"
    },
    {
        "id": 2,
        "name": "Lettuce Sandwich",
        "price": 300,
        "desc": "A snack that recovers 100 HP.",
        "image": "https://static.wikia.nocookie.net/yakuza/images/d/d9/SalOni.jpg/revision/latest?cb=20190516081059"
    },
        {
            "id": 3,
        "name": "Salmon Onigiri",
        "price": 130,
        "desc": "A snack that recovers 50 HP.",
        "image": "https://static.wikia.nocookie.net/yakuza/images/d/d9/SalOni.jpg/revision/latest?cb=20190516081059"
    },
    {
        "id": 4,
        "name": "Lettuce Sandwich",
        "price": 300,
        "desc": "A snack that recovers 100 HP.",
        "image": "https://static.wikia.nocookie.net/yakuza/images/d/d9/SalOni.jpg/revision/latest?cb=20190516081059"
    }
]
export default function handler(req, res) {
  res.status(200).json({
    products: productJSON
  })
}
