import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Text,
  Button,
  Stack,
  Image,
  Heading,
  Grid,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import {CartState} from "../context/Context"
const Fashion = () => {
  const { state: { cart }, dispatch } = CartState()
  const [data, setData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected);
  };

  const clearFilter = () => {
    setSelectedCategories([]);
  };
  // console.log(selectedCategories.length,selectedCategories)
  const filteredData = selectedCategories.length
    ? data?.filter((ele) => selectedCategories.includes(ele.category))
    : data;

  return (
    <div> 
      <br />
      <CheckboxGroup value={selectedCategories} onChange={handleCategoryChange} >
        <Checkbox value="men's clothing">Men's Clothing</Checkbox>
        <Checkbox value="jewelery">Jewelery</Checkbox>
        <Checkbox value="electronics">Electronics</Checkbox>
        <Checkbox value="women's clothing">Women's Clothing</Checkbox>
      </CheckboxGroup>

      <Checkbox onChange={clearFilter}>Clear Filter</Checkbox>

      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {filteredData?.map((ele) => (
          <Card key={ele.id} maxW="sm">
            <CardBody>
              <Image
                src={ele.image}
                alt="Product Image"
                borderRadius="lg"
                objectFit="cover"
                boxSize="300px"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{ele.title}</Heading>
                <Text noOfLines={2}>{ele.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {ele.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => {
                    dispatch({
                      type: "ADD",
                      payload: ele,
                    });
                  }}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Fashion;
