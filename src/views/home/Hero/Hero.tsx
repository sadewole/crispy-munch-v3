import { Box, Container, Flex} from '@chakra-ui/layout';
import React from 'react';

// css
import './hero.css';

const Hero = () => {
  return (
    <Box minHeight="full" >
      <Container maxW="container.xl">
        <Flex flexWrap="wrap" justifyContent="space-between" >
          <Box maxWidth="lg" display="flex" alignItems="center" justifyContent="center" padding="10" >
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, est corporis id sit, explicabo odit voluptate veniam hic harum tempore aliquam sapiente enim animi facilis ipsa ipsum accusamus? Vel, est quasi a sit ipsam, labore necessitatibus eligendi tempora laudantium illum quis tempore asperiores eum quisquam reprehenderit sunt nisi. Sit amet ipsum consectetur nihil impedit obcaecati quos doloremque nobis commodi rem. Eveniet ex quibusdam quos nesciunt soluta adipisci a, facilis ullam fugit tenetur quisquam omnis dignissimos tempore temporibus voluptatibus assumenda quod, accusamus animi? Tempora sunt odio accusamus, fugiat modi eaque ipsa omnis vel vero doloremque, amet at, reprehenderit illum sed possimus?</h1>
          </Box>

          <Box flex="1" >
            <Box position="relative">
              <div className="shape">
                <img alt="Shapes" src="/images/home/shapes.svg" />
              </div>
              <Box display="flex" alignItems="center" justifyContent="center">
                <div className="hero-image" >
                <img alt="Presentation" src="/images/home/iphone-right.png" />
                </div>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
