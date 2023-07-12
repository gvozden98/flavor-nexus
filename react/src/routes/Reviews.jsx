import { useEffect, useState } from "react";
import Review from "../components/Review";
import { getReviews } from "../components/getReviews";
import Loading from "../components/loading";

function Reviews() {
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const fetchedReviews = await getReviews();
                    setReviews(fetchedReviews);
                    console.log(fetchedReviews);
                } catch (error) {
                    // Obrada greške ako se dogodi neuspešan zahtev
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }, 300);
    }, []);
    return (
        <>
            {reviews ? (
                <>
                    <Review reviews={reviews} />
                    {/* <Pagination next={recipes._links.next.href} /> */}
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Reviews;
