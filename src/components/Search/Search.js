import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOption } from '../../Api';

function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null);

    
    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(
                `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
                geoApiOption
            );

            const data = await response.json();

            return {
                options: data.data.map((city) => ({
                    label: `${city.name}, ${city.countryCode}`,
                    value: `${city.latitude} ${city.longitude}`,
                })),
            };
        } catch (error) {
            console.error('Error fetching cities:', error);
            return { options: [] };
        }
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={2000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;
