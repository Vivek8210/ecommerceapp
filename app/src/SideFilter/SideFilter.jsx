
import React,{useState,useEffect}from 'react'
import {Box,Text,CheckboxGroup,VStack,Checkbox,Menu,MenuButton,MenuList,MenuOptionGroup,MenuItemOption,MenuDivider,Button, Flex, MenuItem} from '@chakra-ui/react'
import {useSearchParams} from 'react-router-dom'

import Price from '../SideFilterContent/Price'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const SideFilter = () => {
  const [searchParms,setSearchParams] = useSearchParams()
  const[categoryValue,setCategoryValue]=useState(searchParms.getAll('category') || [])

    // const dispatch=useDispatch()
    
  const categoryHandler=(value)=>{
    console.log(value)
    setCategoryValue(value)
  }
  // useEffect(()=>{

  //   if(categoryValue){
  //     setSearchParams({category:categoryValue},{replace: true})

  //     let params = {
  //       category: searchParms.getAll('category'),
  //     }
  //     dispatch(fetchData(params))
  //   }
  // },[categoryValue,setSearchParams,dispatch])
  return (
   
  <>

    <Box className='sideFilter-main-container-'>
      <Box display={{base:"none",md:"block"}} p="1rem 2rem">
        <Text fontSize="2xl" mb='10px'>Filters</Text>
        <Text mb='10px' fontWeight={"bold"}>Category</Text>
        <CheckboxGroup 
        colorScheme='green' 
        defaultValue={categoryValue} 
        onChange={categoryHandler}
        zIndex={+1}
        >

<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left'>
        Men Wear
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Women Wear
        </Box>
        <AccordionIcon />
      </AccordionButton >
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left'>
         Kid Wear
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>₹200 - ₹500</Checkbox>
          <Checkbox value='book'>₹500 - ₹700</Checkbox>
          <Checkbox value="men's top clothing">₹700 - ₹1000</Checkbox>
          <Checkbox value="women's clothing">₹1000 - ₹1500</Checkbox>
          <Checkbox value='jewelery'>₹1500 - ₹2000</Checkbox>
          <Checkbox value="men's clothing">₹2000 - ₹2500</Checkbox>
         
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left'>
         Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left'>
         Size
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left' >
         Fit
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
  
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<br />

        
        </CheckboxGroup>


      
        <Text mb='10px' fontWeight={"bold"}>Discount Range</Text>
     
    
        <Price/>
      
<br />
        
    
          <Text mb='10px'fontWeight={"bold"}>Customar Rating</Text>
        <CheckboxGroup 
        colorScheme='green' 
        defaultValue={categoryValue} 
        onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value='electronics'>4* & above</Checkbox>
          <Checkbox value='book'>3* & above</Checkbox>
          <Checkbox value="men's top clothing">2* & above</Checkbox>
          <Checkbox value="women's clothing">1* & above</Checkbox>
          
          </VStack>
          </CheckboxGroup>
  
      </Box>
   {/* responsive */}

    <Box display={{base:"block",md:"none"}}  style={{height:"auto"}}>
    <Menu closeOnSelect={false}>
    <MenuButton as={Button} colorScheme='blue' style={{zIndex:"+1"}}>
      MenuItem
    </MenuButton>
    <MenuList minWidth='240px' style={{zIndex:"+1"}}>
      <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
        <MenuItemOption value='asc'>Ascending</MenuItemOption>
        <MenuItemOption value='desc'>Descending</MenuItemOption>
      </MenuOptionGroup>
      <MenuDivider />
      <MenuOptionGroup  type='checkbox' style={{zIndex:"+1"}}>
      
          <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left'>
        Men Wear
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Women Wear
        </Box>
        <AccordionIcon />
      </AccordionButton >
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left'>
         Kid Wear
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>₹200 - ₹500</Checkbox>
          <Checkbox value='book'>₹500 - ₹700</Checkbox>
          <Checkbox value="men's top clothing">₹700 - ₹1000</Checkbox>
          <Checkbox value="women's clothing">₹1000 - ₹1500</Checkbox>
          <Checkbox value='jewelery'>₹1500 - ₹2000</Checkbox>
          <Checkbox value="men's clothing">₹2000 - ₹2500</Checkbox>
         
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left'>
         Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left'>
         Size
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{outline:"none"}}>
        <Box as="span" flex='1' textAlign='left' >
         Fit
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack  alignItems={"baseline"} zIndex={"+1"}>
  <Checkbox  value='electronics'>Top Wear</Checkbox>
  
          <Checkbox value='book'>Inner Wear</Checkbox>
          <Checkbox value="men's top clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Western Wear</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's top clothing">Women's clothing</Checkbox>
          <Checkbox value='westernwear'>Western Wear</Checkbox>
          </VStack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  
      
        <Text mb='10px' fontWeight={"bold"}>Discount Range</Text>
     
    
        <Price/>
      
<br />
        
    
          <Text mb='10px'fontWeight={"bold"}>Customar Rating</Text>
        <CheckboxGroup 
        colorScheme='green' 
        defaultValue={categoryValue} 
        onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value='electronics'>4* & above</Checkbox>
          <Checkbox value='book'>3* & above</Checkbox>
          <Checkbox value="men's top clothing">2* & above</Checkbox>
          <Checkbox value="women's clothing">1* & above</Checkbox>
          
          </VStack>
          </CheckboxGroup>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
  
    </Box>
  </Box>
  </>
  )
}

export default SideFilter