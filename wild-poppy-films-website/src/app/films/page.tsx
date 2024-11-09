import { FilmsPage } from "@/components/pages/FilmsPage/FilmsPage";
import { Suspense } from "react";
export default function Films() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FilmsPage />
        </Suspense>
    );
}
