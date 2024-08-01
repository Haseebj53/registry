import { searchPackages } from '../../api/queries/searchPackages'

export async function SearchLoader({ request }: { request: Request }) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");
    if (!term) {
        throw new Error("Search term must be provided");
    }
    const results = await searchPackages(term);

    //good for makig multiple request for loader functions
    return {
        searchResults: results
    }
}