import { useState, useEffect } from 'react';
//import faker from 'faker'
import axios from 'axios'

function Suggestions() {
    //const [suggestions, setSuggestions] = useState([])
    const [people, setPeople] = useState([])

    useEffect(() => {
         return axios.get('https://randomuser.me/api/?results=5')
        .then((res) => {
            const {results} = res.data
            //console.log("res.data.results:", res.data.results)
            //return results
            //people = res.data.results
            setPeople(people)
            console.log('people:', people)
            //console.log('people[0].id:', people[0].id)
            //console.log('people[0].picture.thumbnail:', people[0].picture.thumbnail)
            //console.log('people[0].name.first.people[0].name.last:', 
            //    people[0].name.first + '.' + people[0].name.last)
        })
        .catch((err) => {
            console.error(err)
        })

        // const suggestions = [...Array(5)].map((_, i) => ({
        //     ...faker.helpers.contextualCard(),
        //     id: i,
        // }))

        // setSuggestions(suggestions)
        // console.log('suggestions in Suggestions:', suggestions)
    }, [])

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>
            
            {people.map((person, index) => (
                <div
                    key={index} 
                    className='flex items-center justify-between mt-3'
                >
                    <img 
                        src={person.picture.thumbnail} 
                        //src='https://links.papareact.com/3ke'
                        alt={person.name.first + '.' + person.name.last} 
                        className='w-10 h-10 rounded-full border p-[2px]'
                    />

                    <div className='flex-1 ml-4'>
                        <h2 className='font-semibold text-sm'>
                            {person.name.first + '.' + person.name.last}
                        </h2>
                        <h3 className='text-gray-400 text-xs'>
                            Lives in {person.location.city}
                        </h3>
                    </div>
                    <button className='text-blue-400 text-xs font-bold'>Follow</button>
                </div> 
            ))} 
        </div>
    )
}

export default Suggestions



// {suggestions.map((profile) => (
//     <div
//         key={profile.id} 
//         className='flex items-center justify-between mt-3'
//     >
//         <img 
//             //src={profile.avatar} 
//             src='https://links.papareact.com/3ke'
//             alt={profile.name} 
//             className='w-10 h-10 rounded-full border p-[2px]'
//         />

//         <div className='flex-1 ml-4'>
//             <h2 className='font-semibold text-sm'>
//                 {profile.username}
//             </h2>
//             <h3 className='text-gray-400 text-xs'>
//                 Works at {profile.company.name}
//             </h3>
//         </div>
//         <button className='text-blue-400 text-xs font-bold'>Follow</button>
//     </div> 
// ))} 