import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllFilmSlugs, getFilmBySlug } from "@/utils/films";
import { filmSchema } from "@/utils/structuredData";
import FilmPage from "@/components/pages/FilmPage/FilmPage";
import JsonLd from "@/components/JsonLd/JsonLd";
import { formatCredits } from "@/utils/formatters";

export function generateStaticParams() {
    return getAllFilmSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const film = getFilmBySlug(slug);

    if (!film) return { title: "Film not found" };

    const description = film.description.trim();
    const canonical = `/films/${film.slug}`;

    return {
        title: film.title,
        description,
        alternates: { canonical },
        openGraph: {
            type: "video.movie",
            title: film.title,
            description,
            url: canonical,
            images: [{ url: film.cover.src, width: film.cover.width, height: film.cover.height }],
            releaseDate: film.release_year,
            directors: film.production.director,
        },
        twitter: {
            card: "summary_large_image",
            title: `${film.title} (${film.release_year})`,
            description: `Directed by ${formatCredits(film.production.director)}. ${description}`,
            images: [film.cover.src],
        },
    };
}

export default async function IndividualFilmPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const film = getFilmBySlug(slug);

    if (!film) notFound();

    return (
        <>
            <JsonLd schema={filmSchema(film)} />
            <FilmPage film={film} />
        </>
    );
}
