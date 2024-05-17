import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const LoadingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#000000', 
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CircularProgress
          size={100}
          thickness={4}
          sx={{ color: '#ffffff' }} 
        />
      </motion.div>
    </Box>
  );
};

export default LoadingPage;
