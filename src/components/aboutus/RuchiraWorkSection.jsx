import { Box, Grid, Typography } from "@mui/material"

const RuchiraWorkSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                margin: "0 auto",
                padding: { xs: 2, md: 4 },
            }}
        >
            <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
                {/* Left side - Image */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            // height: "31.9375rem",
                            minHeight: { xs: "300px", md: "31.9375rem" },
                            width: { xs: "100%", md: " 29.625rem" },
                            borderRadius: { xs: "16px 16px 0 0", md: "16px" },
                            overflow: "hidden",
                            position: "absolute",
                            left: { xs: "-16px", md: 170 },
                            mt: { xs: "-16px", md: 2.5 },
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
                            height: "35.75rem",
                            minHeight: { xs: "300px", md: "400px" },
                            background: "#383086",
                            padding: { xs: 3, md: 4 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            color: "white",
                            maxWidth: " 63.5rem",
                            ml: { xs: 0, md: 0 },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                marginBottom: 4,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 30 },
                            }}
                        >
                            Ruchira is a person who is passionate about working with people across all age groups to help them learn
                            to BE the best, most empowered versions of themselves.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                marginBottom: 4,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 30 },
                            }}
                        >
                            She is in her element as a storyteller with young children, something that she has transformed into a
                            ritual with her two young sons.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                marginBottom: 4,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 30 },
                            }}
                        >
                            She is committed to her journey as a Mindfulness Coach and it is her vision that she, along with her team,
                            will work on the BEing state of people and organizations so that they can in turn create more effective
                            and successful Doing states for themselves.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                                ml: { xs: 0, md: 30 },
                            }}
                        >
                            In her own words, "First we need to learn to BE the most authentic versions of ourselves,the Doing will
                            follow automatically!" For the past many years, Ruchira has worked consistently at her vision and has an
                            enormous body of experience to show for it.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default RuchiraWorkSection
