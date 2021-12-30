import {useState, useEffect} from 'react'
//import faker from 'faker'
import Story from './Story'
import { useSession } from 'next-auth/react';
import axios from 'axios'

function Stories() {
    const {data: session} = useSession()
    //const [suggestions, setSuggestions] = useState([])
    const [people, setPeople] = useState([])
    
    useEffect(() => {

        return axios.get('https://randomuser.me/api/?results=20')
        .then((res) => {
            const {results} = res.data
            //console.log("res.data.results:", res.data.results)
            //return results
            people = res.data.results
            setPeople(people)
            //console.log('people:', people)
            //console.log('people[0].id:', people[0].id)
            //console.log('people[0].picture.thumbnail:', people[0].picture.thumbnail)
            //console.log('people[0].name.first.people[0].name.last:', 
            //    people[0].name.first + '.' + people[0].name.last)
        })
        .catch((err) => {
            console.error(err)
        })

        // const suggestions = [...Array(20)].map((_, i) => ({
        //     ...faker.helpers.contextualCard(),
        //     id: i,
        // }))
        // setSuggestions(suggestions)
    }, [])

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm 
            overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {session && (
                <Story 
                    img={session.user.image}
                    username={session.user.username} 
                /> 
            )}
            
            {people.map((person, index) => (
                <Story 
                    key={index} 
                    img={person.picture.thumbnail} 
                    //img='https://links.papareact.com/3ke'
                    username={person.name.first + '.' + person.name.last} 
                /> 
            ))} 
        </div>
    )
}

export default Stories



// {suggestions.map((profile) => (
//                 <Story 
//                     key={profile.id} 
//                     //img={profile.avatar} 
//                     img='https://links.papareact.com/3ke'
//                     username={profile.username} 
//                 /> 
//             ))}