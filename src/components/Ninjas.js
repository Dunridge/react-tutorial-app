import React from 'react';
import '../styles/Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {
    // const { ninjas } = props;
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //             </div>
    //         );
    //     } else {
    //         return null;
    //     }
    // });

    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
        ) : null;
    });

    //console.log(props);
    return (
        <div className="ninja">
            
            {ninjaList}
            {/* {ninjas.map(ninja => {
                return ninja.age > 20 ? (
                    <div className="ninja" key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <div>Belt: {ninja.belt}</div>
                    </div>
                ) : null;
            })} */}
        </div>
    );
};

export default Ninjas;
