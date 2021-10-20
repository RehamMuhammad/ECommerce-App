export interface Product {
    id: number,
    title: String,
    price: number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: number,
      count_in_stock: number
  }
}
  