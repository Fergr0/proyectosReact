import perro from '../assets/perro.jpeg'

function AnimalListComponent() {
    const animals = [
        {id: 1,
         name: "dog",
         img:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
        },
        {id: 2,
            name: "cat",
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg"
           },
           {id: 3,
            name: "bird",
            img: "https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg"
           }
    ]

    const HTMLAnimals = animals.map((animal)=>{
        return (
        <li key={animal.id}>
            <h3>{animal.name}</h3>
            <img src={animal.img} alt='animal picture' width={200}></img>
        </li>
        )
    })


  return (
    <section>
        <h2>Animals</h2>
        <ul>
            {HTMLAnimals}
        </ul>
    </section>
  )
}

export default AnimalListComponent