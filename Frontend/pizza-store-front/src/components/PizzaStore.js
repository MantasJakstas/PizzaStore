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
  const [value, setValue] = React.useState("");
  const [order, setOrder] = React.useState({
    size: "",
    pepperoni: false,
    mushrooms: false,
    olives: false,
    cheese: false,
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOrderChange = (event) => {
    if (event.target.name === "size") {
      setOrder({
        ...order,
        [event.target.name]: event.target.value,
      });
    } else {
      setOrder({
        ...order,
        [event.target.name]: event.target.checked,
      });
    }
  };

  console.log(order);

  const { pepperoni, mushrooms, olives, cheese } = order;

  const sendOrder = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    };

    fetch()
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

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
            <RadioGroup
              name="size"
              value={order.size}
              onChange={handleOrderChange}
            >
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
                    onChange={handleOrderChange}
                    name="pepperoni"
                  />
                }
                label="Pepperoni"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={mushrooms}
                    onChange={handleOrderChange}
                    name="mushrooms"
                  />
                }
                label="Mushrooms"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={olives}
                    onChange={handleOrderChange}
                    name="olives"
                  />
                }
                label="Olives"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cheese}
                    onChange={handleOrderChange}
                    name="cheese"
                  />
                }
                label="Cheese"
              />
            </FormControl>
          </Box>
          <Button onClick={sendOrder}>Order</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PizzaStore;
