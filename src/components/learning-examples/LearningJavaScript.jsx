const person = {
    name:"Croco",
    address:{
        line1:'Baker Street',
        city: 'London',
        country: 'UK',
    },
    profiles: ['instagram', 'linkedin'],
    printProfile: () => {
        person.profiles.map(
            (profile) => console.log(profile)
        )
    }
}

export default function LearningComponent() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.profiles[1]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}