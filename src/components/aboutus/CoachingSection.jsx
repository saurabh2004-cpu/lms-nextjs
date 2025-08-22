import { Box, Grid, Typography } from "@mui/material"

const CoachingSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                margin: "0 auto",
                padding: { xs: 2, md: 4 },
            }}
        >
            <Grid container spacing={0} sx={{ justifyContent: "center" }}>
                {/* Left side - Image */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            // height: "31.9375rem",
                            minHeight: { xs: "300px", md: " 23.4375rem" },
                            width: { xs: "100%", md: " 24.875rem" },
                            overflow: "hidden",
                            position: "absolute",
                            left: { xs: "-16px", md: 170 },
                            mt: { xs: "0px", md: '-70px' },
                        }}
                    >
                        <img
                            src="/images/image-264.png"
                            alt="Ruchira working at her desk"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right side - Text content */}
                <Grid item xs={12} md={6} justifyContent="center">
                    <Box
                        sx={{
                            height: "28.125rem",
                            minHeight: { xs: "300px", md: "28.125rem" },
                            background: "#383086",
                            padding: { xs: 3, md: 4 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            color: "white",
                            maxWidth: "  53.0625rem ",
                            ml: { xs: 0, md: 30 },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 20 },
                            }}
                        >
                            She recently spoke at a TEDx event on ‘how the knowledge of personality science can reduce divorces due to incompatibility’.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                marginBottom: 4,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 20 },
                            }}
                        >
                            Ruchira has coached thousands of individuals across the world on the Science of Personalities and on the nuances of Parenting.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                marginBottom: 4,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 20 },
                            }}
                        >
                            She has conducted In-Depth sessions on Personalities EO & YPO Forums in Nepal, Delhi, Pune, Coimbatore and Mumbai.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                marginBottom: 4,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 20 },
                            }}
                        >
                            She has conducted workshops for teenagers on Identifying Personalities and on using the knowledge to carve out great relationships and to design work and study schedules.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 20 },
                            }}
                        >
                            She conducted a workshop titled Understanding Others by BEing Yourself’ for Round Table, Gwalior.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 20 },
                            }}
                        >
                            She has conducted sessions on the Secrets of BEing Happy.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* Personal Information Button */}
            <button style={{
                background: '#383086',
                border: '2px solid white',
                borderRadius: '20px',
                color: '#f1cf87',
                padding: '8px 20px',
                fontSize: '15px',
                fontWeight: '500',
                fontFamily: 'Poppins, sans-serif',
                cursor: 'pointer',
                marginBottom: '16px',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                left: '5%',
                top: '50px',
            }}>
                Personal Information
            </button>

            {/* Personal Information Paragraph */}
            <p style={{
                margin: '0',
                fontSize: '14px',
                color: '#333',
                background: 'white',
                padding: '16px',
                borderRadius: '8px',
                marginTop: '16px',
                fontWeight: '500',
                fontFamily: 'Poppins, sans-serif',
                position: 'relative',
                left: '5%',
                top: '20px',
            }}>
                Married to Karan Darda, Executive Director of the Lokmat Media Group 2 children, Aryaveer and Adhiraj.
            </p>
        </Box>
    )
}

export default CoachingSection
