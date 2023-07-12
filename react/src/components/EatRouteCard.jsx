/* eslint-disable react/prop-types */
function EatRouteCard({ recipes }) {
    {
        console.log(recipes);
    }
    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col">
                    <div className="card mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {/* nisi zavrsio ovo  */}
                                    {recipes.hits.map((recipe, index) => {
                                        return (
                                            <div
                                                className="card my-2"
                                                key={index}
                                            >
                                                <div className="card-header text-start fs-2">
                                                    {recipe.recipe.label}
                                                </div>
                                                <div className="card-body">
                                                    <img
                                                        className="card-img-top"
                                                        src={
                                                            recipe.recipe.image
                                                        }
                                                        alt="Recipe image"
                                                        style={{
                                                            width: "300px",
                                                            height: "300px",
                                                        }}
                                                    ></img>
                                                    {/* <h6 className="card-title fs-3">
                                                        {recipe.recipe.label}
                                                    </h6> */}
                                                    <p className="card-text">
                                                        {recipe.recipe.ingredientLines.map(
                                                            (
                                                                ingrident,
                                                                index
                                                            ) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {
                                                                            ingrident
                                                                        }
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </p>
                                                    <br />
                                                    <p>
                                                        Calories:{" "}
                                                        {Math.round(
                                                            recipe.recipe
                                                                .calories
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="card-footer text-body-secondary">
                                                    <p>
                                                        Prep time:{" "}
                                                        {recipe.recipe
                                                            .totalTime === 0
                                                            ? "N/A"
                                                            : recipe.recipe
                                                                  .totalTime}{" "}
                                                        minutes
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div
                    className="col-xl-3"
                    style={{ border: "1px solid red" }}
                ></div> */}
            </div>
        </div>
    );
}

export default EatRouteCard;
