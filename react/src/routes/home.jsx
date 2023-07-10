import EatAndFitness from "../components/EatAndFitness";
import { useState, useEffect, useRef } from "react";
import { getRecipe } from "../components/getRecipe";

export default function Home() {
    //const recipes = useRef(); // Ovde ćemo čuvati recepte koje dobijemo od API-ja
    const [recipes, setRecipes] = useState({
        recipe: {
            uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8df4752ee8a848009150039769465230",
            label: "Rita's Kickin' Onion Chicken",
            image: "https://edamam-product-images.s3.amazonaws.com/web-img/821/821e89805c43714628035844ad7eb436.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLWVhc3QtMSJGMEQCIGivVOtnG2edRDmM4x%2BgsWTsAL8%2FxyixhHfq8FuKBh2jAiAjKqrLZRzL7y8CSZ3PTogLUmIme4N2JoHElXWApRhlTirCBQiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnkB6PMEF8j6KTlQQKpYFUsrRGeUL3UvRrwe%2FEj4HMQrT7OkUDfxCo0wT7CPBNbptfZPrza02zRO7ZhEYfa9aYskgIjZsT3tZIXBKLiubT%2FLMzlnhsR%2B5oGhoMkYI2Yve8fqId9f573l%2FQco4AjTv%2BaMaDx148ViNz%2FZ3YZ6ZANbwfpQ%2FUYARx%2BI1FnIl8qcVhWbGHTxetvGinULqtW7ArbJmI%2F6Sbb8fyvv3id1lg955VlnjxOtOgF4HLaVqxXIFxaoKxY3p5Jcu10G0CSuRFQff%2BlUJTFfGP91PVgvjSOj4v%2BswZ3Xv38ogkgZUp67OEkTn3o6tCh1%2FZIgJ2nvUMQNkJXeykViEdjfzo6GfIhTaBaxhaGGcHczX4BHYsDsn1AVjlvZGb95p86Ap7tRqIkM5tluWAANTZ9tXtjRuU9yFl%2B5l0G9haRlcksTSVJJFYXDA%2BXdVrRqVHwTgyP3EVe5uq4La1WE8Oi2rJnTycQbfUtFRfJ%2F0SnvYm2GKYidVlrtNbct7GqKPRd4XYk0uwUNH9xlIFrsw3hs%2BzKPS5ZK9wrlDT9Wqz2tyaDwpnsb8xXdpcZbTvyR0ujh5z9cH2wwz1l5q5%2B13DgHb2PA3kTTBjqPjm%2F4OBISHPw6CtssCDOvwCIDPKxYMTNZNjnmVYV1y87cwDoXVtEAz0PD0hUi5kkUuGrObpLXu%2BWP8%2FnQEKGnu9NcgE4en6PwbhrQhU%2Bpx494QTrTnrS1G4l0NjOT0v7lUWf3qKU5fgFAkuebBN%2F5wVMhPzjxA1pbnN0h1paapuTaoaWac5584px%2FHhiAV322hqXgBJWlp10IqiEYYfsFjXGB%2FBsRjdTezLJqmEpXApHhhwNaOBt7U1ZR5A%2BT2SDt74wtPZbIVQEPI83mJqeysLoMw0cSspQY6sgG44OANdg7SPa9xbOv6ivneWPiWgEm6kElQZcMFR3Vjxw33di5EW8Jef1XF7nFslAtSYHQzHua2IwlOEsk3nqA%2BhXwuHvOZtWpw%2FoP%2BagAPKCB3aj9JOGR7svnzFoMra%2F61zVAf5fsthsnvMdIvna6yv%2Bc%2FZHkkvtIi5uSxaaAZI%2BCSeCgeti55Vz2%2FhtU02JrirKg3qWFNkualN%2B1JgIQpuZ86g4eWNc7vgseKZNZxHNXi&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230709T220823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDLSKAGNJ%2F20230709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=191fa3171f48dcaa8626f15862e47b33024ef19874236fbbbf9b9fa1bba4676f",
            images: {
                THUMBNAIL: {
                    url: "https://edamam-product-images.s3.amazonaws.com/web-img/821/821e89805c43714628035844ad7eb436-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLWVhc3QtMSJGMEQCIGivVOtnG2edRDmM4x%2BgsWTsAL8%2FxyixhHfq8FuKBh2jAiAjKqrLZRzL7y8CSZ3PTogLUmIme4N2JoHElXWApRhlTirCBQiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnkB6PMEF8j6KTlQQKpYFUsrRGeUL3UvRrwe%2FEj4HMQrT7OkUDfxCo0wT7CPBNbptfZPrza02zRO7ZhEYfa9aYskgIjZsT3tZIXBKLiubT%2FLMzlnhsR%2B5oGhoMkYI2Yve8fqId9f573l%2FQco4AjTv%2BaMaDx148ViNz%2FZ3YZ6ZANbwfpQ%2FUYARx%2BI1FnIl8qcVhWbGHTxetvGinULqtW7ArbJmI%2F6Sbb8fyvv3id1lg955VlnjxOtOgF4HLaVqxXIFxaoKxY3p5Jcu10G0CSuRFQff%2BlUJTFfGP91PVgvjSOj4v%2BswZ3Xv38ogkgZUp67OEkTn3o6tCh1%2FZIgJ2nvUMQNkJXeykViEdjfzo6GfIhTaBaxhaGGcHczX4BHYsDsn1AVjlvZGb95p86Ap7tRqIkM5tluWAANTZ9tXtjRuU9yFl%2B5l0G9haRlcksTSVJJFYXDA%2BXdVrRqVHwTgyP3EVe5uq4La1WE8Oi2rJnTycQbfUtFRfJ%2F0SnvYm2GKYidVlrtNbct7GqKPRd4XYk0uwUNH9xlIFrsw3hs%2BzKPS5ZK9wrlDT9Wqz2tyaDwpnsb8xXdpcZbTvyR0ujh5z9cH2wwz1l5q5%2B13DgHb2PA3kTTBjqPjm%2F4OBISHPw6CtssCDOvwCIDPKxYMTNZNjnmVYV1y87cwDoXVtEAz0PD0hUi5kkUuGrObpLXu%2BWP8%2FnQEKGnu9NcgE4en6PwbhrQhU%2Bpx494QTrTnrS1G4l0NjOT0v7lUWf3qKU5fgFAkuebBN%2F5wVMhPzjxA1pbnN0h1paapuTaoaWac5584px%2FHhiAV322hqXgBJWlp10IqiEYYfsFjXGB%2FBsRjdTezLJqmEpXApHhhwNaOBt7U1ZR5A%2BT2SDt74wtPZbIVQEPI83mJqeysLoMw0cSspQY6sgG44OANdg7SPa9xbOv6ivneWPiWgEm6kElQZcMFR3Vjxw33di5EW8Jef1XF7nFslAtSYHQzHua2IwlOEsk3nqA%2BhXwuHvOZtWpw%2FoP%2BagAPKCB3aj9JOGR7svnzFoMra%2F61zVAf5fsthsnvMdIvna6yv%2Bc%2FZHkkvtIi5uSxaaAZI%2BCSeCgeti55Vz2%2FhtU02JrirKg3qWFNkualN%2B1JgIQpuZ86g4eWNc7vgseKZNZxHNXi&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230709T220823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDLSKAGNJ%2F20230709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=651e80dbe18e53c3e7385579cd7f3b2c8d734f4bb4f1a8b7871d8a689feefc15",
                    width: 100,
                    height: 100,
                },
                SMALL: {
                    url: "https://edamam-product-images.s3.amazonaws.com/web-img/821/821e89805c43714628035844ad7eb436-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLWVhc3QtMSJGMEQCIGivVOtnG2edRDmM4x%2BgsWTsAL8%2FxyixhHfq8FuKBh2jAiAjKqrLZRzL7y8CSZ3PTogLUmIme4N2JoHElXWApRhlTirCBQiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnkB6PMEF8j6KTlQQKpYFUsrRGeUL3UvRrwe%2FEj4HMQrT7OkUDfxCo0wT7CPBNbptfZPrza02zRO7ZhEYfa9aYskgIjZsT3tZIXBKLiubT%2FLMzlnhsR%2B5oGhoMkYI2Yve8fqId9f573l%2FQco4AjTv%2BaMaDx148ViNz%2FZ3YZ6ZANbwfpQ%2FUYARx%2BI1FnIl8qcVhWbGHTxetvGinULqtW7ArbJmI%2F6Sbb8fyvv3id1lg955VlnjxOtOgF4HLaVqxXIFxaoKxY3p5Jcu10G0CSuRFQff%2BlUJTFfGP91PVgvjSOj4v%2BswZ3Xv38ogkgZUp67OEkTn3o6tCh1%2FZIgJ2nvUMQNkJXeykViEdjfzo6GfIhTaBaxhaGGcHczX4BHYsDsn1AVjlvZGb95p86Ap7tRqIkM5tluWAANTZ9tXtjRuU9yFl%2B5l0G9haRlcksTSVJJFYXDA%2BXdVrRqVHwTgyP3EVe5uq4La1WE8Oi2rJnTycQbfUtFRfJ%2F0SnvYm2GKYidVlrtNbct7GqKPRd4XYk0uwUNH9xlIFrsw3hs%2BzKPS5ZK9wrlDT9Wqz2tyaDwpnsb8xXdpcZbTvyR0ujh5z9cH2wwz1l5q5%2B13DgHb2PA3kTTBjqPjm%2F4OBISHPw6CtssCDOvwCIDPKxYMTNZNjnmVYV1y87cwDoXVtEAz0PD0hUi5kkUuGrObpLXu%2BWP8%2FnQEKGnu9NcgE4en6PwbhrQhU%2Bpx494QTrTnrS1G4l0NjOT0v7lUWf3qKU5fgFAkuebBN%2F5wVMhPzjxA1pbnN0h1paapuTaoaWac5584px%2FHhiAV322hqXgBJWlp10IqiEYYfsFjXGB%2FBsRjdTezLJqmEpXApHhhwNaOBt7U1ZR5A%2BT2SDt74wtPZbIVQEPI83mJqeysLoMw0cSspQY6sgG44OANdg7SPa9xbOv6ivneWPiWgEm6kElQZcMFR3Vjxw33di5EW8Jef1XF7nFslAtSYHQzHua2IwlOEsk3nqA%2BhXwuHvOZtWpw%2FoP%2BagAPKCB3aj9JOGR7svnzFoMra%2F61zVAf5fsthsnvMdIvna6yv%2Bc%2FZHkkvtIi5uSxaaAZI%2BCSeCgeti55Vz2%2FhtU02JrirKg3qWFNkualN%2B1JgIQpuZ86g4eWNc7vgseKZNZxHNXi&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230709T220823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDLSKAGNJ%2F20230709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5f1094236ac7b60bd7737e964454667df32471bb5aa60062be49ccead8316bfc",
                    width: 200,
                    height: 200,
                },
                REGULAR: {
                    url: "https://edamam-product-images.s3.amazonaws.com/web-img/821/821e89805c43714628035844ad7eb436.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLWVhc3QtMSJGMEQCIGivVOtnG2edRDmM4x%2BgsWTsAL8%2FxyixhHfq8FuKBh2jAiAjKqrLZRzL7y8CSZ3PTogLUmIme4N2JoHElXWApRhlTirCBQiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnkB6PMEF8j6KTlQQKpYFUsrRGeUL3UvRrwe%2FEj4HMQrT7OkUDfxCo0wT7CPBNbptfZPrza02zRO7ZhEYfa9aYskgIjZsT3tZIXBKLiubT%2FLMzlnhsR%2B5oGhoMkYI2Yve8fqId9f573l%2FQco4AjTv%2BaMaDx148ViNz%2FZ3YZ6ZANbwfpQ%2FUYARx%2BI1FnIl8qcVhWbGHTxetvGinULqtW7ArbJmI%2F6Sbb8fyvv3id1lg955VlnjxOtOgF4HLaVqxXIFxaoKxY3p5Jcu10G0CSuRFQff%2BlUJTFfGP91PVgvjSOj4v%2BswZ3Xv38ogkgZUp67OEkTn3o6tCh1%2FZIgJ2nvUMQNkJXeykViEdjfzo6GfIhTaBaxhaGGcHczX4BHYsDsn1AVjlvZGb95p86Ap7tRqIkM5tluWAANTZ9tXtjRuU9yFl%2B5l0G9haRlcksTSVJJFYXDA%2BXdVrRqVHwTgyP3EVe5uq4La1WE8Oi2rJnTycQbfUtFRfJ%2F0SnvYm2GKYidVlrtNbct7GqKPRd4XYk0uwUNH9xlIFrsw3hs%2BzKPS5ZK9wrlDT9Wqz2tyaDwpnsb8xXdpcZbTvyR0ujh5z9cH2wwz1l5q5%2B13DgHb2PA3kTTBjqPjm%2F4OBISHPw6CtssCDOvwCIDPKxYMTNZNjnmVYV1y87cwDoXVtEAz0PD0hUi5kkUuGrObpLXu%2BWP8%2FnQEKGnu9NcgE4en6PwbhrQhU%2Bpx494QTrTnrS1G4l0NjOT0v7lUWf3qKU5fgFAkuebBN%2F5wVMhPzjxA1pbnN0h1paapuTaoaWac5584px%2FHhiAV322hqXgBJWlp10IqiEYYfsFjXGB%2FBsRjdTezLJqmEpXApHhhwNaOBt7U1ZR5A%2BT2SDt74wtPZbIVQEPI83mJqeysLoMw0cSspQY6sgG44OANdg7SPa9xbOv6ivneWPiWgEm6kElQZcMFR3Vjxw33di5EW8Jef1XF7nFslAtSYHQzHua2IwlOEsk3nqA%2BhXwuHvOZtWpw%2FoP%2BagAPKCB3aj9JOGR7svnzFoMra%2F61zVAf5fsthsnvMdIvna6yv%2Bc%2FZHkkvtIi5uSxaaAZI%2BCSeCgeti55Vz2%2FhtU02JrirKg3qWFNkualN%2B1JgIQpuZ86g4eWNc7vgseKZNZxHNXi&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230709T220823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDLSKAGNJ%2F20230709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=191fa3171f48dcaa8626f15862e47b33024ef19874236fbbbf9b9fa1bba4676f",
                    width: 300,
                    height: 300,
                },
                LARGE: {
                    url: "https://edamam-product-images.s3.amazonaws.com/web-img/821/821e89805c43714628035844ad7eb436-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLWVhc3QtMSJGMEQCIGivVOtnG2edRDmM4x%2BgsWTsAL8%2FxyixhHfq8FuKBh2jAiAjKqrLZRzL7y8CSZ3PTogLUmIme4N2JoHElXWApRhlTirCBQiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnkB6PMEF8j6KTlQQKpYFUsrRGeUL3UvRrwe%2FEj4HMQrT7OkUDfxCo0wT7CPBNbptfZPrza02zRO7ZhEYfa9aYskgIjZsT3tZIXBKLiubT%2FLMzlnhsR%2B5oGhoMkYI2Yve8fqId9f573l%2FQco4AjTv%2BaMaDx148ViNz%2FZ3YZ6ZANbwfpQ%2FUYARx%2BI1FnIl8qcVhWbGHTxetvGinULqtW7ArbJmI%2F6Sbb8fyvv3id1lg955VlnjxOtOgF4HLaVqxXIFxaoKxY3p5Jcu10G0CSuRFQff%2BlUJTFfGP91PVgvjSOj4v%2BswZ3Xv38ogkgZUp67OEkTn3o6tCh1%2FZIgJ2nvUMQNkJXeykViEdjfzo6GfIhTaBaxhaGGcHczX4BHYsDsn1AVjlvZGb95p86Ap7tRqIkM5tluWAANTZ9tXtjRuU9yFl%2B5l0G9haRlcksTSVJJFYXDA%2BXdVrRqVHwTgyP3EVe5uq4La1WE8Oi2rJnTycQbfUtFRfJ%2F0SnvYm2GKYidVlrtNbct7GqKPRd4XYk0uwUNH9xlIFrsw3hs%2BzKPS5ZK9wrlDT9Wqz2tyaDwpnsb8xXdpcZbTvyR0ujh5z9cH2wwz1l5q5%2B13DgHb2PA3kTTBjqPjm%2F4OBISHPw6CtssCDOvwCIDPKxYMTNZNjnmVYV1y87cwDoXVtEAz0PD0hUi5kkUuGrObpLXu%2BWP8%2FnQEKGnu9NcgE4en6PwbhrQhU%2Bpx494QTrTnrS1G4l0NjOT0v7lUWf3qKU5fgFAkuebBN%2F5wVMhPzjxA1pbnN0h1paapuTaoaWac5584px%2FHhiAV322hqXgBJWlp10IqiEYYfsFjXGB%2FBsRjdTezLJqmEpXApHhhwNaOBt7U1ZR5A%2BT2SDt74wtPZbIVQEPI83mJqeysLoMw0cSspQY6sgG44OANdg7SPa9xbOv6ivneWPiWgEm6kElQZcMFR3Vjxw33di5EW8Jef1XF7nFslAtSYHQzHua2IwlOEsk3nqA%2BhXwuHvOZtWpw%2FoP%2BagAPKCB3aj9JOGR7svnzFoMra%2F61zVAf5fsthsnvMdIvna6yv%2Bc%2FZHkkvtIi5uSxaaAZI%2BCSeCgeti55Vz2%2FhtU02JrirKg3qWFNkualN%2B1JgIQpuZ86g4eWNc7vgseKZNZxHNXi&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230709T220823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDLSKAGNJ%2F20230709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2d58f6376b664c537c4700dd117d761b1ab33c3354148a3bfc803a9685a22240",
                    width: 600,
                    height: 600,
                },
            },
            source: "food.com",
            url: "http://www.food.com/recipe/ritas-kickin-onion-chicken-334445",
            shareAs:
                "http://www.edamam.com/recipe/rita-s-kickin-onion-chicken-8df4752ee8a848009150039769465230/chicken/3-ing/high-protein",
            yield: 4.0,
            dietLabels: ["High-Protein", "Low-Carb", "Low-Sodium"],
            healthLabels: [
                "Sugar-Conscious",
                "Keto-Friendly",
                "Paleo",
                "Mediterranean",
                "DASH",
                "Dairy-Free",
                "Gluten-Free",
                "Wheat-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free",
                "Kosher",
            ],
            cautions: [],
            ingredientLines: [
                "4 chicken breasts",
                "1 -2 tablespoon dehydrated onion",
                "1⁄4 cup olive oil",
            ],
            ingredients: [
                {
                    text: "4 chicken breasts",
                    quantity: 4.0,
                    measure: "<unit>",
                    food: "chicken breasts",
                    weight: 1088.0,
                    foodCategory: "Poultry",
                    foodId: "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                    image: "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg",
                },
                {
                    text: "1 -2 tablespoon dehydrated onion",
                    quantity: 1.5,
                    measure: "tablespoon",
                    food: "onion",
                    weight: 15.0,
                    foodCategory: "vegetables",
                    foodId: "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                    image: "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg",
                },
                {
                    text: "1⁄4 cup olive oil",
                    quantity: 0.25,
                    measure: "cup",
                    food: "olive oil",
                    weight: 54.0,
                    foodCategory: "Oils",
                    foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
                    image: "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
                },
            ],
            calories: 1788.96,
            totalCO2Emissions: 11067.686373624,
            co2EmissionsClass: "G",
            totalWeight: 1157.0,
            totalTime: 50.0,
            cuisineType: ["american"],
            mealType: ["lunch/dinner"],
            dishType: ["main course"],
            totalNutrients: {
                ENERC_KCAL: {
                    label: "Energy",
                    quantity: 1788.96,
                    unit: "kcal",
                },
                FAT: {
                    label: "Fat",
                    quantity: 82.5206,
                    unit: "g",
                },
                FASAT: {
                    label: "Saturated",
                    quantity: 13.583740000000002,
                    unit: "g",
                },
                FATRN: {
                    label: "Trans",
                    quantity: 0.07616,
                    unit: "g",
                },
                FAMS: {
                    label: "Monounsaturated",
                    quantity: 46.91827,
                    unit: "g",
                },
                FAPU: {
                    label: "Polyunsaturated",
                    quantity: 10.28567,
                    unit: "g",
                },
                CHOCDF: {
                    label: "Carbs",
                    quantity: 1.401,
                    unit: "g",
                },
                "CHOCDF.net": {
                    label: "Carbohydrates (net)",
                    quantity: 1.146,
                    unit: "g",
                },
                FIBTG: {
                    label: "Fiber",
                    quantity: 0.255,
                    unit: "g",
                },
                SUGAR: {
                    label: "Sugars",
                    quantity: 0.636,
                    unit: "g",
                },
                PROCNT: {
                    label: "Protein",
                    quantity: 244.965,
                    unit: "g",
                },
                CHOLE: {
                    label: "Cholesterol",
                    quantity: 794.24,
                    unit: "mg",
                },
                NA: {
                    label: "Sodium",
                    quantity: 491.28000000000003,
                    unit: "mg",
                },
                CA: {
                    label: "Calcium",
                    quantity: 58.39000000000001,
                    unit: "mg",
                },
                MG: {
                    label: "Magnesium",
                    quantity: 306.14000000000004,
                    unit: "mg",
                },
                K: {
                    label: "Potassium",
                    quantity: 3656.36,
                    unit: "mg",
                },
                FE: {
                    label: "Iron",
                    quantity: 4.359500000000001,
                    unit: "mg",
                },
                ZN: {
                    label: "Zinc",
                    quantity: 7.4239000000000015,
                    unit: "mg",
                },
                P: {
                    label: "Phosphorus",
                    quantity: 2321.79,
                    unit: "mg",
                },
                VITA_RAE: {
                    label: "Vitamin A",
                    quantity: 97.92,
                    unit: "µg",
                },
                VITC: {
                    label: "Vitamin C",
                    quantity: 1.11,
                    unit: "mg",
                },
                THIA: {
                    label: "Thiamin (B1)",
                    quantity: 1.02962,
                    unit: "mg",
                },
                RIBF: {
                    label: "Riboflavin (B2)",
                    quantity: 1.9298100000000002,
                    unit: "mg",
                },
                NIA: {
                    label: "Niacin (B3)",
                    quantity: 104.4654,
                    unit: "mg",
                },
                VITB6A: {
                    label: "Vitamin B6",
                    quantity: 8.841680000000002,
                    unit: "mg",
                },
                FOLDFE: {
                    label: "Folate equivalent (total)",
                    quantity: 100.77,
                    unit: "µg",
                },
                FOLFD: {
                    label: "Folate (food)",
                    quantity: 100.77,
                    unit: "µg",
                },
                FOLAC: {
                    label: "Folic acid",
                    quantity: 0.0,
                    unit: "µg",
                },
                VITB12: {
                    label: "Vitamin B12",
                    quantity: 2.2848,
                    unit: "µg",
                },
                VITD: {
                    label: "Vitamin D",
                    quantity: 0.0,
                    unit: "µg",
                },
                TOCPHA: {
                    label: "Vitamin E",
                    quantity: 13.871800000000002,
                    unit: "mg",
                },
                VITK1: {
                    label: "Vitamin K",
                    quantity: 32.568000000000005,
                    unit: "µg",
                },
                WATER: {
                    label: "Water",
                    quantity: 817.3970000000002,
                    unit: "g",
                },
            },
            totalDaily: {
                ENERC_KCAL: {
                    label: "Energy",
                    quantity: 89.448,
                    unit: "%",
                },
                FAT: {
                    label: "Fat",
                    quantity: 126.95476923076922,
                    unit: "%",
                },
                FASAT: {
                    label: "Saturated",
                    quantity: 67.91870000000002,
                    unit: "%",
                },
                CHOCDF: {
                    label: "Carbs",
                    quantity: 0.46699999999999997,
                    unit: "%",
                },
                FIBTG: {
                    label: "Fiber",
                    quantity: 1.02,
                    unit: "%",
                },
                PROCNT: {
                    label: "Protein",
                    quantity: 489.93,
                    unit: "%",
                },
                CHOLE: {
                    label: "Cholesterol",
                    quantity: 264.74666666666667,
                    unit: "%",
                },
                NA: {
                    label: "Sodium",
                    quantity: 20.47,
                    unit: "%",
                },
                CA: {
                    label: "Calcium",
                    quantity: 5.839000000000001,
                    unit: "%",
                },
                MG: {
                    label: "Magnesium",
                    quantity: 72.89047619047619,
                    unit: "%",
                },
                K: {
                    label: "Potassium",
                    quantity: 77.79489361702127,
                    unit: "%",
                },
                FE: {
                    label: "Iron",
                    quantity: 24.21944444444445,
                    unit: "%",
                },
                ZN: {
                    label: "Zinc",
                    quantity: 67.49000000000001,
                    unit: "%",
                },
                P: {
                    label: "Phosphorus",
                    quantity: 331.6842857142857,
                    unit: "%",
                },
                VITA_RAE: {
                    label: "Vitamin A",
                    quantity: 10.88,
                    unit: "%",
                },
                VITC: {
                    label: "Vitamin C",
                    quantity: 1.2333333333333334,
                    unit: "%",
                },
                THIA: {
                    label: "Thiamin (B1)",
                    quantity: 85.80166666666668,
                    unit: "%",
                },
                RIBF: {
                    label: "Riboflavin (B2)",
                    quantity: 148.4469230769231,
                    unit: "%",
                },
                NIA: {
                    label: "Niacin (B3)",
                    quantity: 652.90875,
                    unit: "%",
                },
                VITB6A: {
                    label: "Vitamin B6",
                    quantity: 680.129230769231,
                    unit: "%",
                },
                FOLDFE: {
                    label: "Folate equivalent (total)",
                    quantity: 25.1925,
                    unit: "%",
                },
                VITB12: {
                    label: "Vitamin B12",
                    quantity: 95.20000000000002,
                    unit: "%",
                },
                VITD: {
                    label: "Vitamin D",
                    quantity: 0.0,
                    unit: "%",
                },
                TOCPHA: {
                    label: "Vitamin E",
                    quantity: 92.47866666666668,
                    unit: "%",
                },
                VITK1: {
                    label: "Vitamin K",
                    quantity: 27.140000000000004,
                    unit: "%",
                },
            },
            digest: [
                {
                    label: "Fat",
                    tag: "FAT",
                    schemaOrgTag: "fatContent",
                    total: 82.5206,
                    hasRDI: true,
                    daily: 126.95476923076922,
                    unit: "g",
                    sub: [
                        {
                            label: "Saturated",
                            tag: "FASAT",
                            schemaOrgTag: "saturatedFatContent",
                            total: 13.583740000000002,
                            hasRDI: true,
                            daily: 67.91870000000002,
                            unit: "g",
                        },
                        {
                            label: "Trans",
                            tag: "FATRN",
                            schemaOrgTag: "transFatContent",
                            total: 0.07616,
                            hasRDI: false,
                            daily: 0.0,
                            unit: "g",
                        },
                        {
                            label: "Monounsaturated",
                            tag: "FAMS",
                            schemaOrgTag: null,
                            total: 46.91827,
                            hasRDI: false,
                            daily: 0.0,
                            unit: "g",
                        },
                        {
                            label: "Polyunsaturated",
                            tag: "FAPU",
                            schemaOrgTag: null,
                            total: 10.28567,
                            hasRDI: false,
                            daily: 0.0,
                            unit: "g",
                        },
                    ],
                },
                {
                    label: "Carbs",
                    tag: "CHOCDF",
                    schemaOrgTag: "carbohydrateContent",
                    total: 1.401,
                    hasRDI: true,
                    daily: 0.46699999999999997,
                    unit: "g",
                    sub: [
                        {
                            label: "Carbs (net)",
                            tag: "CHOCDF.net",
                            schemaOrgTag: null,
                            total: 1.146,
                            hasRDI: false,
                            daily: 0.0,
                            unit: "g",
                        },
                        {
                            label: "Fiber",
                            tag: "FIBTG",
                            schemaOrgTag: "fiberContent",
                            total: 0.255,
                            hasRDI: true,
                            daily: 1.02,
                            unit: "g",
                        },
                        {
                            label: "Sugars",
                            tag: "SUGAR",
                            schemaOrgTag: "sugarContent",
                            total: 0.636,
                            hasRDI: false,
                            daily: 0.0,
                            unit: "g",
                        },
                        {
                            label: "Sugars, added",
                            tag: "SUGAR.added",
                            schemaOrgTag: null,
                            total: 0.0,
                            hasRDI: false,
                            daily: 0.0,
                            unit: "g",
                        },
                    ],
                },
                {
                    label: "Protein",
                    tag: "PROCNT",
                    schemaOrgTag: "proteinContent",
                    total: 244.965,
                    hasRDI: true,
                    daily: 489.93,
                    unit: "g",
                },
                {
                    label: "Cholesterol",
                    tag: "CHOLE",
                    schemaOrgTag: "cholesterolContent",
                    total: 794.24,
                    hasRDI: true,
                    daily: 264.74666666666667,
                    unit: "mg",
                },
                {
                    label: "Sodium",
                    tag: "NA",
                    schemaOrgTag: "sodiumContent",
                    total: 491.28000000000003,
                    hasRDI: true,
                    daily: 20.47,
                    unit: "mg",
                },
                {
                    label: "Calcium",
                    tag: "CA",
                    schemaOrgTag: null,
                    total: 58.39000000000001,
                    hasRDI: true,
                    daily: 5.839000000000001,
                    unit: "mg",
                },
                {
                    label: "Magnesium",
                    tag: "MG",
                    schemaOrgTag: null,
                    total: 306.14000000000004,
                    hasRDI: true,
                    daily: 72.89047619047619,
                    unit: "mg",
                },
                {
                    label: "Potassium",
                    tag: "K",
                    schemaOrgTag: null,
                    total: 3656.36,
                    hasRDI: true,
                    daily: 77.79489361702127,
                    unit: "mg",
                },
                {
                    label: "Iron",
                    tag: "FE",
                    schemaOrgTag: null,
                    total: 4.359500000000001,
                    hasRDI: true,
                    daily: 24.21944444444445,
                    unit: "mg",
                },
                {
                    label: "Zinc",
                    tag: "ZN",
                    schemaOrgTag: null,
                    total: 7.4239000000000015,
                    hasRDI: true,
                    daily: 67.49000000000001,
                    unit: "mg",
                },
                {
                    label: "Phosphorus",
                    tag: "P",
                    schemaOrgTag: null,
                    total: 2321.79,
                    hasRDI: true,
                    daily: 331.6842857142857,
                    unit: "mg",
                },
                {
                    label: "Vitamin A",
                    tag: "VITA_RAE",
                    schemaOrgTag: null,
                    total: 97.92,
                    hasRDI: true,
                    daily: 10.88,
                    unit: "µg",
                },
                {
                    label: "Vitamin C",
                    tag: "VITC",
                    schemaOrgTag: null,
                    total: 1.11,
                    hasRDI: true,
                    daily: 1.2333333333333334,
                    unit: "mg",
                },
                {
                    label: "Thiamin (B1)",
                    tag: "THIA",
                    schemaOrgTag: null,
                    total: 1.02962,
                    hasRDI: true,
                    daily: 85.80166666666668,
                    unit: "mg",
                },
                {
                    label: "Riboflavin (B2)",
                    tag: "RIBF",
                    schemaOrgTag: null,
                    total: 1.9298100000000002,
                    hasRDI: true,
                    daily: 148.4469230769231,
                    unit: "mg",
                },
                {
                    label: "Niacin (B3)",
                    tag: "NIA",
                    schemaOrgTag: null,
                    total: 104.4654,
                    hasRDI: true,
                    daily: 652.90875,
                    unit: "mg",
                },
                {
                    label: "Vitamin B6",
                    tag: "VITB6A",
                    schemaOrgTag: null,
                    total: 8.841680000000002,
                    hasRDI: true,
                    daily: 680.129230769231,
                    unit: "mg",
                },
                {
                    label: "Folate equivalent (total)",
                    tag: "FOLDFE",
                    schemaOrgTag: null,
                    total: 100.77,
                    hasRDI: true,
                    daily: 25.1925,
                    unit: "µg",
                },
                {
                    label: "Folate (food)",
                    tag: "FOLFD",
                    schemaOrgTag: null,
                    total: 100.77,
                    hasRDI: false,
                    daily: 0.0,
                    unit: "µg",
                },
                {
                    label: "Folic acid",
                    tag: "FOLAC",
                    schemaOrgTag: null,
                    total: 0.0,
                    hasRDI: false,
                    daily: 0.0,
                    unit: "µg",
                },
                {
                    label: "Vitamin B12",
                    tag: "VITB12",
                    schemaOrgTag: null,
                    total: 2.2848,
                    hasRDI: true,
                    daily: 95.20000000000002,
                    unit: "µg",
                },
                {
                    label: "Vitamin D",
                    tag: "VITD",
                    schemaOrgTag: null,
                    total: 0.0,
                    hasRDI: true,
                    daily: 0.0,
                    unit: "µg",
                },
                {
                    label: "Vitamin E",
                    tag: "TOCPHA",
                    schemaOrgTag: null,
                    total: 13.871800000000002,
                    hasRDI: true,
                    daily: 92.47866666666668,
                    unit: "mg",
                },
                {
                    label: "Vitamin K",
                    tag: "VITK1",
                    schemaOrgTag: null,
                    total: 32.568000000000005,
                    hasRDI: true,
                    daily: 27.140000000000004,
                    unit: "µg",
                },
                {
                    label: "Sugar alcohols",
                    tag: "Sugar.alcohol",
                    schemaOrgTag: null,
                    total: 0.0,
                    hasRDI: false,
                    daily: 0.0,
                    unit: "g",
                },
                {
                    label: "Water",
                    tag: "WATER",
                    schemaOrgTag: null,
                    total: 817.3970000000002,
                    hasRDI: false,
                    daily: 0.0,
                    unit: "g",
                },
            ],
        },
    }); // Ovde ćemo čuvati recepte koje dobijemo od API-ja
    const [query, setQuery] = useState(""); // Ovde ćemo čuvati trenutni upit
    const [numberOfIngridients, setNumberOfIngridients] = useState(3); // Ovde ćemo čuvati broj sastojaka
    const [diet, setDiet] = useState("balanced"); // Ovde ćemo čuvati dijetu
    const [random, setRandom] = useState(true); // Ovde ćemo čuvati da li su recepti random
    const [loading, setLoading] = useState(false); // Ovde ćemo čuvati da li se recepti učitavaju

    function extractInfo(fetchedRecipes) {
        const hits = fetchedRecipes.hits; // Get the "hits" array from the response
        const extractedData = []; // Array to store the extracted data

        for (let i = 0; i < hits.length; i++) {
            const recipe = hits[i].recipe; // Get the recipe object from each hit
            const { label, image, ingredientLines } = recipe; // Destructure the required properties

            extractedData.push({
                label,
                image,
                ingredientLines,
            });
        }

        return extractedData; // Array containing extracted data for each recipe
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedRecipes = await getRecipe(
                    query,
                    numberOfIngridients,
                    diet,
                    random
                );
                setLoading(true);
                setRecipes(fetchedRecipes);
                //setRecipes(extractInfo(fetchedRecipes));
                console.log("Fetched recipes:", recipes);
                // Ovde možete dalje obraditi dohvaćene recepte ili ažurirati stanje komponente
            } catch (error) {
                // Obrada greške ako se dogodi neuspešan zahtev
                console.error("Error fetching recipes:", error);
            }
        };

        fetchData();
    }, []);
    //if (recipes === undefined) return <h1>Loading...</h1>;
    return (
        <div className="container text-center mt-3">
            <div className="row">
                <div className="col-xl-9" style={{ border: "1px solid red" }}>
                    <EatAndFitness
                        link="/category/eat"
                        headerColor="color-primary"
                        header="Eat"
                        headers={["Recipes", "Reviews", "Education"]}
                        cardTitles={[
                            recipes[0]?.label,
                            // recipes[1].label,
                            // recipes[2].label,
                        ]}
                        cardImages={
                            [
                                //recipes[0]?.image,
                                // recipes[1].image,
                                // recipes[2].image,
                            ]
                        }
                        cardContents={
                            [
                                //recipes[0]?.ingredientLines,
                                // recipes[1].ingredientLines,
                                // recipes[2].ingredientLines,
                            ]
                        }
                    />
                    <EatAndFitness
                        link="/category/fitness"
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
