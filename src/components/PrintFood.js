import React from "react"

const foodList = [
    {
        name: "melon",
        color: "green",
        image:
            "https://static.libertyprim.com/files/familles/melon-large.jpg?1574629891",
        id: 1,
    },
    {
        name: "blueberry",
        color: "blue",
        image:
            "https://image.shutterstock.com/image-photo/blueberry-fresh-raw-berries-leaves-260nw-593906903.jpg",
        id: 2,
    },
    {
        name: "strawberry",
        color: "red",
        image:
            "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-strawberrie-558x600.jpg",
        id: 3,
    },
    {
        name: "fineapple",
        color: "orange",
        image:
            "https://i.pinimg.com/originals/ff/60/34/ff6034805c4b9de8d0375597a68ee7e0.jpg",
        id: 4,
    },
];

const Food = (props) => {
    return (
        <>
            <h1
                style={{
                    color: `${props.color}`,
                }}
            >
                I like {props.name}
            </h1>
            <img src={props.img} alt={props.name} />
        </>
    );
};

function renderFood(food) {
    return (
        <Food
            key={food.id}
            name={food.name}
            color={food.color}
            img={food.image}
        />
    );
}

const PrintFood = () =>{
        // return (
    //     <>
    //         {foodList.map((food) => (
    //             <Food name={food.name} color={food.color} img={food.image} />
    //         ))}
    //     </>
    // );
    return(
        <div>
            {console.log(foodList.map(renderFood))}
            {foodList.map(renderFood)}
        </div>
    )
}

export default PrintFood ;