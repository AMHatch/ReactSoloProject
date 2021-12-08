
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';




export default function FilterDropDown(productType, setProductType) {
    const products = useSelector(state => state.products.products)
    const workProducts = products.filter(product=>product.type === 'work')
    const fireProducts = products.filter(product=>product.type === 'fire')
    const heritageProducts = products.filter(product=>product.type === 'heritage')



    const handleChange = (event) => {
    setProductType(event.target.value);
    };
    


return (
    <div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="selectType">Boot Type</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={productType}
        onChange={handleChange}
        label="Boot Type"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={products}>All Products</MenuItem>
        <MenuItem value={workProducts}>Work Products</MenuItem>
        <MenuItem value={fireProducts}>Fire Products</MenuItem>
        <MenuItem value={heritageProducts}>Heritage Products</MenuItem>
      </Select>
    </FormControl>
</div>
);
}

