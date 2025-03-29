import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOption } from '../../Api';


function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null);

    const loadOptions = (InputValue) => {

        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${InputValue}`, geoApiOption)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options : response.data.map((city)=>{
                        return{
                            label : `${city.name} ${city.countryCode}`,
                            value:`${city.latitude} ${city.longitude}`,
                        };
                    }),
                };
            })
            .catch((err) => console.log(err, "this is wrong "))
    };


    const handelOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);

    }
    return (
        <AsyncPaginate
            placeholder="Search for City "
            debounceTimeout={600}
            value={search}
            onChange={handelOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;
