import React from 'react'

const SearchInput = ({ className, type, ...otherInputProps}) => (
    <input className={className} type={type} {...otherInputProps} />
)

export default SearchInput;