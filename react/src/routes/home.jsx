import EatAndFitness from "../components/EatAndFitness";
export default function Home() {
    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col-xl-9" style={{ border: "1px solid red" }}>
                    <EatAndFitness
                        headerColor="color-primary"
                        header="Eat"
                        headers={["Recipes", "Reviews", "Education"]}
                        cardTitles={[]}
                        cardContents={[]}
                    />
                    <EatAndFitness
                        headerColor="color-secondary"
                        header="Fitness"
                        headers={["Activities", "Exercises", "Education"]}
                        cardTitles={[]}
                        cardContents={[]}
                    />
                </div>
                <div
                    className="col-xl-3"
                    style={{ border: "1px solid red" }}
                ></div>
            </div>
        </div>
    );
}
