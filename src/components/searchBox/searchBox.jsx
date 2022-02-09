import { TextField } from "@mui/material";

const SearchBox = ({placeholder, dataInput}) => {

    const handleChange = (evt) =>{
        dataInput(evt.target.value);
    }

    return (
        <div className="search-container">
            <TextField label={placeholder} variant="filled" onChange={handleChange}/>
        </div>
    )
}

export default SearchBox;