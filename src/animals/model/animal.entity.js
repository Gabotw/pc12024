export class Animal {
    constructor(name="",
                image="",
                habitat="",
                description="",
                family="") {
        this.name = name;
        this.image = image;
        this.habitat = habitat;
        this.description = description;
        this.family = family;
        this.rating = 0;
    }

    setRating(rating) {
        this.rating = rating;
    }
}