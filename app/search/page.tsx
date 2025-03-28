import { supabase } from "@/supabase"
import Card from "@/app/components/Card"
import { Product } from "../types/interfaces/product.interface"

// @ts-expect-error oui
export default async function SearchPage({ searchParams }) {
  const { q } = searchParams
  let results: Product[] = []

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .textSearch("name", q)

  if (error) {
    console.error("Error performing search:", error)
  } else {
    results = data
  }

  return (
    <>
      <h1>Search Products</h1>
      <p>{results.length} results</p>

      <div className="products-grid-home">
        {results.map((product) => (
          <Card
            href={"/items/" + product.slug}
            key={product.id}
            imageUrl={`${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_IMG_URL}${product.img}`}
            title={product.name}
            price={`${product.price} €`}
            width={139}
            height={241}
          />
        ))}
      </div>
    </>
  )
}
