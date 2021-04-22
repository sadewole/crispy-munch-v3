import { Box, Grid, Link } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebook, FaGooglePlus } from "react-icons/fa";
import { IconButton } from '@chakra-ui/button';

import './footer.css';

const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <Grid className='footer-grid mt-5' templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} >
          <Box>
            <ul>
              <li>Crispy Munch</li>
              <li>+123 000 555 000</li>
              <li>me@crispymunch.com</li>
              <li>Lagos Island</li>
              <li>Lagos</li>
            </ul>
          </Box>
          <Box>
            <ul>
              <li>Use Crispy Munch</li>
              <li>
                <Link as={RouterLink} to='#'>For Large & Complex Events</Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>Crispy Munch Mobile App</Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>Pricing</Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>Online Booking</Link>
              </li>
            </ul>
          </Box>
          <Box>
            <ul>
              <li>Plan Event</li>
              <li>
                <Link as={RouterLink} to='#'>Conference Management</Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>Birhday Party</Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>Wedding</Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>Games and Sport</Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>Burial Ceremony</Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>House Warming</Link>
              </li>
            </ul>

          </Box>
          <Box className='social-icon'>

            <ul>
              <li>Connect with us</li>
              <li>
                <Link as={RouterLink} to='#'>
                  <IconButton icon={<FaFacebook />} aria-label="Facebook account" color="darkgray" />
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>
                  <IconButton icon={<FaLinkedin />} aria-label="LinkedIn account" color="darkgray" />
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>
                  <IconButton icon={<FaTwitter />} aria-label="Twitter account" color="darkgray" />
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to='#'>
                  <IconButton icon={<FaGooglePlus />} aria-label="Google-plus account" color="darkgray" />
                </Link>
              </li>
            </ul>
          </Box>

        </Grid>
        <div className='footer-bottom'>
          <p>
            &copy; 2021 - Crispy Munch -<Link to="https://twitter.com/samador9" ><b>Developed by SAMADOR</b></Link>
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
