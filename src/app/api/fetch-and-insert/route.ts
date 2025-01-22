import axios from 'axios';
import { client } from '../../../sanity/lib/client';
import { NextResponse } from 'next/server';

// Define the Product type
interface Product {
  id: string;
  name: string;
  imagePath: string;
  price: string | number; // The API might return price as a string
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

// Named export for GET request handler
export async function GET() {
  try {
    // Fetch data from the API
    const response = await axios.get<Product[]>('https://template-0-beta.vercel.app/api/product');
    const data = response.data;

    // Insert each product into Sanity
    for (const product of data) {
      await client.create({
        _type: 'product',
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price as string), // Convert price if necessary
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });
    }

    // Send response
    return NextResponse.json({ message: 'Data inserted successfully!' }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred');
    }
    return NextResponse.json({ error: 'Failed to fetch or insert data' }, { status: 500 });
  }
}
