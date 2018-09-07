import React from 'react';
import Card from './Card'

const CardList = ({ contacts }) => {
    return (
        <div>
            {
            contacts.map( (contactPerson, i) => {
                return (
                    <Card key={contactPerson.id} 
                        id={contactPerson.id} 
                        name={contactPerson.name} 
                        phone={contactPerson.phone} 
                        email={contactPerson.email}
                    />
                )
            })    
        }   
        </div>
    )
}

export default CardList