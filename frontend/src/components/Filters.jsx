import React from 'react';

const Filters = ({ setFilters }) => {
    const handleFilterChange = (e) => {
        setFilters(filters => ({ ...filters, [e.target.name]: e.target.value }));
    };

    return (
        // <div className='py-5 px-5 justify-center gap-y-3' >
        //     <label className=' m-4 font-bold '>
        //         Year:
        //         <input className='bg-gray-300 w-32 rounded-md' type="number" name="year" onChange={handleFilterChange} />
        //     </label>
        //     <label>
        //         Topic:
        //         <input type="text" name="topic" onChange={handleFilterChange} />
        //     </label>
        //     <label>
        //         Sector:
        //         <input type="text" name="sector" onChange={handleFilterChange} />
        //     </label>
        //     <label>
        //         Region:
        //         <input type="text" name="region" onChange={handleFilterChange} />
        //     </label>
        //     <label>
        //         PEST:
        //         <input type="text" name="pest" onChange={handleFilterChange} />
        //     </label>
        //     <label>
        //         Source:
        //         <input type="text" name="source" onChange={handleFilterChange} />
        //     </label>
        //     <label>
        //         SWOT:
        //         <input type="text" name="swot" onChange={handleFilterChange} />
        //     </label>
        //     <label>
        //         Country:
        //         <input type="text" name="country" onChange={handleFilterChange} />
        //     </label>
        //     <label>
        //         City:
        //         <input type="text" name="city" onChange={handleFilterChange} />
        //     </label>
        // </div>
        <div className='py-5 px-5 grid grid-cols-2 gap-4'>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>Year:</span>
                <input className='bg-gray-200 text-black  border border-gray-300 rounded-md p-2' type="number" name="year" onChange={handleFilterChange} />
            </label>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>Topic:</span>
                <input className='bg-gray-200 text-black border border-gray-300 rounded-md p-2' type="text" name="topic" onChange={handleFilterChange} />
            </label>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>Sector:</span>
                <input className='bg-gray-200 text-black border border-gray-300 rounded-md p-2' type="text" name="sector" onChange={handleFilterChange} />
            </label>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>Region:</span>
                <input className='bg-gray-200 text-black border border-gray-300 rounded-md p-2' type="text" name="region" onChange={handleFilterChange} />
            </label>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>PEST:</span>
                <input className='bg-gray-200 text-black border border-gray-300 rounded-md p-2' type="text" name="pest" onChange={handleFilterChange} />
            </label>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>Source:</span>
                <input className='bg-gray-200 text-black border border-gray-300 rounded-md p-2' type="text" name="source" onChange={handleFilterChange} />
            </label>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>SWOT:</span>
                <input className='bg-gray-200 text-black border border-gray-300 rounded-md p-2' type="text" name="swot" onChange={handleFilterChange} />
            </label>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>Country:</span>
                <input className='bg-gray-200 text-black border border-gray-300 rounded-md p-2' type="text" name="country" onChange={handleFilterChange} />
            </label>
            <label className='flex flex-col'>
                <span className='mb-1 font-bold text-gray-300'>City:</span>
                <input className='bg-gray-200 text-black border border-gray-300 rounded-md p-2' type="text" name="city" onChange={handleFilterChange} />
            </label>
        </div>
    );
};

export default Filters;
