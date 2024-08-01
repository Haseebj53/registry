import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./seachLoader";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult;
  const renderedPackages = data.searchResults.map((result) => {
    return <PackageListItem pack={result} key={result.name} />;
  });
  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Page</h1>
      <div className="space-y-4 mt-4">{renderedPackages}</div>
    </div>
  );
}
