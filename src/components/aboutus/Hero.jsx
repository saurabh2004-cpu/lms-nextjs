import React from "react";
import { Box, Typography } from "@mui/material";

const AboutHeroSection = () => {
  const LeafSVG = ({ sx }) => (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: "absolute",
        opacity: 0.3,
        pointerEvents: "none",
        ...sx,
      }}
    >
      <path
        d="M12 2C12 2 22 8.5 12 22C12 22 2 8.5 12 2Z"
        stroke="#d4c4a0"
        strokeWidth="1.5"
        fill="rgba(212, 196, 160, 0.3)"
      />
      <path
        d="M12 2C12 7 12 12 12 22"
        stroke="#d4c4a0"
        strokeWidth="1"
      />
    </Box>
  );

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: 400,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        mb: 4,
      }}
    >
      
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          

          {/* Profile Image */}
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src="/images/Group-1-99.png"
              alt="About Me"
              sx={{
                width: '100vw',
                height: '100%',
                objectFit: "cover",
              }}
            />
            
          </Box>
        </Box>

        {/* Right Title */}
        {/* <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 800,
            color: "#2c2c2c",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            m: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          ABOUT <br /> ME
        </Typography> */}
      </Box>
    </Box>
  );
};

export default AboutHeroSection;
