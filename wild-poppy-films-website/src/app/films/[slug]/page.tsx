import { getFilmBySlug } from "@/utils/crudFunctions";
import FilmPage from "@/components/pages/FilmPage/FilmPage";
export default function IndividualFilmPage({ params }: { params: { slug: string } }) {
    return <FilmPage film={getFilmBySlug(params.slug)} />;
}
