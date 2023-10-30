import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  List,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import Box from "@mui/material/Box";
import React from "react";
//<img src="https://media.dominospizza.lt/menu/product_osg_image/2022/04/11/BYO_480%D1%85480.png"></img>
function PizzaStore() {
  console.log("RELOAD");
  const [value, setValue] = React.useState("");
  const [toppings, setToppings] = React.useState({
    pepperoni: false,
    mushrooms: false,
    olives: false,
    cheese: false,
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleToppingsChange = (event) => {
    setToppings({
      ...toppings,
      [event.target.name]: event.target.checked,
    });
  };
  const { pepperoni, mushrooms, olives, cheese } = toppings;

  return (
    <Box height="90vh" display="flex" alignItems="center">
      <Grid container spacing={4} alignContent="center" justifyContent="center">
        <Grid item>
          <img
            src="https://media.dominospizza.lt/menu/product_osg_image/2022/04/11/BYO_480%D1%85480.png"
            alt="Pizza"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">React Pizza Order System</Typography>
          <FormControl>
            <FormLabel>Pizza Size</FormLabel>
            <RadioGroup value={value} onChange={handleChange}>
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="Small"
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel value="big" control={<Radio />} label="Big" />
            </RadioGroup>
          </FormControl>
          <Box mt={2}>
            <Typography fontWeight="bold">Pizza Toppings</Typography>
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={pepperoni}
                    onChange={handleToppingsChange}
                    name="pepperoni"
                  />
                }
                label="Pepperoni"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={mushrooms}
                    onChange={handleToppingsChange}
                    name="mushrooms"
                  />
                }
                label="Mushrooms"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={olives}
                    onChange={handleToppingsChange}
                    name="olives"
                  />
                }
                label="Olives"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cheese}
                    onChange={handleToppingsChange}
                    name="cheese"
                  />
                }
                label="Cheese"
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PizzaStore;
